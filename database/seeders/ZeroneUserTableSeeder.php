<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\User\Models\Company\Company;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Services\User\Admin\UserGroupAdminService;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Database\Seeder;

class ZeroneUserTableSeeder extends Seeder
{
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
            $targetGroup = $groups->where('title', $viewlevel->title)->first();
            $targetGroup->access = $viewlevel->id;
            $targetGroup->save();
        }



        //$this->migrate($data, null);
//
//        # 建立廠商
//        $companyCategories = Category::where('extension', 'company')->whereNotNull('parent_id')->get();
//        $data = getJson(__DIR__ . '/jsons/zerone-company.json', true);
//        foreach ($data as $companyInput) {
//            $companyData = [
//                'name'      => $companyInput['CompName'],
//                'vat'       => $companyInput['CompNo'],
//                'domain'    => $companyInput['Domain'],
//                'created_by'=> 1,
//            ];
//
//            if ($companyData['vat'] == 'NULL') {
//                $companyData['vat'] = null;
//            }
//
//            if ($companyInput['type'] == '0') {
//                $companyData['category_id'] = $companyCategories->where('title', '競爭廠商')->first()->id;
//            } elseif ($companyInput['type'] == '1') {
//                $companyData['category_id'] = $companyCategories->where('title', '經銷會員')->first()->id;
//            } elseif ($companyInput['type'] == '3') {
//                $companyData['category_id'] = $companyCategories->where('title', '原廠')->first()->id;
//            } else {
//                $companyData['category_id'] = $companyCategories->where('title', '零壹員工')->first()->id;
//            }
//
//            $company = Company::create($companyData);
//        }
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
