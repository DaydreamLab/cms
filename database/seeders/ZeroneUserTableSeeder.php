<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\NewsletterSubscription\NewsletterSubscription;
use DaydreamLab\User\Models\Company\Company;
use DaydreamLab\User\Models\User\User;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Services\User\Admin\UserAdminService;
use DaydreamLab\User\Services\User\Admin\UserGroupAdminService;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Passport\Passport;
use function Psy\sh;

class ZeroneUserTableSeeder extends Seeder
{
    public function checkMobilePhone($inputPhone)
    {
        # 沒有填入電話
        if (!$inputPhone) {
            return false;
        }

        # 如果電話是 09xx-xxxxxx格式
        if (strpos($inputPhone, '-')) {
            $inputPhone = str_replace('-', '', $inputPhone);
            if (substr($inputPhone, 0, 1) !== '0') {
                return false;
            }
            $inputPhone = substr($inputPhone, 1);
        }

        #開頭不是9的
        if (substr($inputPhone, 0, 1) !=='9') {
            return false;
        }

        # 長度不是9
        if (strlen($inputPhone) !== 9) {
            return false;
        }

        return $inputPhone;
    }


    public function checkAddress($inputAddress)
    {
        if (!$inputAddress) {
            $address['city'] = null;
            $address['district'] = null;
            $address['zipcode'] = null;
        }

        $inputData = explode(',', $inputAddress);
        if ($inputData[0] == 'none' || $inputData[0] == '' || $inputData[0] == '0') {
            $address['city'] = null;
        }

        $address = [];
        $address['city'] = $inputData[0];

        $region = explode('-', $inputData[1]);
        if (count($region) == 1) {
            if ($region[0] == 'none') {
                $address['district'] = null;
                $address['zipcode'] = null;
            } else {
                if (is_numeric(substr($region[0], 0, 1))) {
                    $address['zipcode'] = substr($region[0], 0, 3);
                    $address['district'] = substr($region[0], 3);
                } else {
                    $address['district'] = $region[0];
                    $address['zipcode'] = null;
                }
            }

        } else {
            $address['zipcode'] = $region[0];
            $address['district'] = $region[1];
        }

        return $address;
    }


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # 建立會員群組
        $groups = collect();
        $data = getJson(__DIR__ . '/jsons/zerone-groups.json', true);
        $this->migrate($data, null);

        # 建立閱讀權限
        $data = getJson(__DIR__ . '/jsons/zerone-viewlevel.json', true);
        $groups = UserGroup::all();
        foreach ($data as $json) {
            $json['groupIds'] = $groups->whereIn('title', $json['groups'])->pluck('id')->all();
            $viewlevel = app(ViewlevelAdminService::class)->store(collect($json));
            $targetGroup = $groups->where('title', $json['title'])->first();
            $targetGroup->access = $json['id'];
            $targetGroup->save();
        }

        $normal = UserGroup::where('title', '一般會員')->first();
        $dealer = UserGroup::where('title', '經銷會員')->first();
        # 建立會員
        $data = getJson(__DIR__ . '/jsons/zerone-users.json', true);
        $invalid = [];
        foreach ($data as $index => $userInput) {

            if ($index < 10) {
                $data = [
                    'email'     => Str::lower($userInput['MemberID']),
                    'name'      => $userInput['MemberName'],
                ];

                $result = $this->checkMobilePhone($userInput['MemberPhone']);
                if ($result) {
                    $data['mobilePhone'] = '0'.$result;
                    $data['password'] = bcrypt(Str::random());
                } else {
                    $invalid[] = $userInput;
                    continue;
                }

                /**
                 * 0: 一般會員
                 * 1: 經銷會員
                 * 2: 被封鎖的經銷會員
                 */
                if ($userInput['category'] == 0) {
                    $data['groupIds'] = [$normal->id];
                } elseif ($userInput['category'] == 1) {
                    $data['groupIds'] = [$dealer->id];
                } else {
                    $data['groupIds'] = [$dealer->id];
                    $data['block'] = 1;
                }

                $companyResult = $this->checkAddress($userInput['CompanyAddress']);
                $companyResult['name'] = $userInput['CompanyName'];
                $companyResult['phoneCode'] = $userInput['CompanyTel_Area'] != 'NULL'
                    ? '0'.$userInput['CompanyTel_Area']
                    : null;
                $companyResult['phone'] = $userInput['CompanyTel'];
                $companyResult['extNumber'] = $userInput['CompanyExt'];
                $companyResult['department'] = $userInput['MemberDep'];
                $companyResult['department'] = $userInput['MemberDep'];
                $companyResult['jobTitle'] = $userInput['MemberProfessional'];
                $companyResult['vat'] = $userInput['統編'];
                $data['company'] = $companyResult;
                $data['activateToken'] = 'importedUser';

                Passport::actingAs(User::find(1));
                $userService = app(UserAdminService::class);
                $existPhone = $userService->findBy('mobilePhone', '=', $data['mobilePhone'])->first();
                if ($existPhone) {
                    $invalid[] = $userInput;
                } else {
                    $data['activation'] = 1;
                    $user = app(UserAdminService::class)->store(collect($data));
                    $allNewsletterCategories = Item::whereHas('category', function ($q) {
                        $q->where('content_type', 'newsletter_category');
                    })->get();

                    # 依照會員等級，找出所有電子報中，吻合會員所屬可訂閱的電子報
                    $userSubscribeCategories = $allNewsletterCategories->filter(function ($category) use ($user) {
                        $categoryUserGroupIds = $category->newsletterUserGroups->pluck('id');

                        return $categoryUserGroupIds->intersect($user->accessGroupIds)->count() == $categoryUserGroupIds->count();
                    });

                    $subscription = NewsletterSubscription::create([
                        'user_id' => $user->id,
                        'email'   => $user->email,
                        'created_by' => 1
                    ]);
                    $subscription->newsletterCategories()->attach($userSubscribeCategories->pluck('id')->all());
                }
            } else {
                break;
            }
        }
        # 把有問題的資料存出來
        Storage::disk('public')->put('invalid-user.json', response()->json($invalid));
    }



    public function migrate($data, $parentNode)
    {
        foreach ($data as $inputItem)
        {
            $children = $inputItem['children'];
            unset($inputItem['children']);

            if (!$parentNode) {
                $parentNode = UserGroup::where('title', $inputItem['parentTitle'])->first();
            }
            unset($inputItem['parentTitle']);

            $inputItem['parent_id'] = $parentNode->id;
            $group = app(UserGroupAdminService::class)->store(collect($inputItem));

            if (count($children)) {
                self::migrate($children, $group);
            }
        }
    }
}
