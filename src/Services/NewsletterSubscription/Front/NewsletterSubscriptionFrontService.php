<?php

namespace DaydreamLab\Cms\Services\NewsletterSubscription\Front;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Repositories\NewsletterSubscription\Front\NewsletterSubscriptionFrontRepository;
use DaydreamLab\Cms\Services\NewsletterSubscription\NewsletterSubscriptionService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Exceptions\BadRequestException;
use DaydreamLab\User\Models\User\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class NewsletterSubscriptionFrontService extends NewsletterSubscriptionService
{
    protected $itemRepository;

    public function __construct(NewsletterSubscriptionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }

    public function add(Collection $input)
    {
        return parent::add($input);
    }


    public function addMapping($item, $input)
    {
        $item->newsletterCategories()->sync($input->get('newsletterCategoryIds') ?: []);
    }


    public function store(Collection $input)
    {
        $user = Auth::guard('api')->user();
        if ($user) {
            $wantCategories = Item::whereIn('alias', $input->get('newsletterCategoriesAlias') ?: [])
                ->whereHas('category', function ($q) {
                    $q->where('content_type', 'newsletter_category');
                })
                ->get();

            # 找出是否有訂閱紀錄
            $subscription = $this->findBy('user_id', '=', $user->id)->first();

            $data = [
                'user_id' => $user->id,
                'email'   => $user->email,
                'newsletterCategoryIds' => $wantCategories->pluck('id')->all()
            ];
        } else {
            $inputEmail =  $input->get('email');
            # 沒有登入會員一定要填 email
            if (!$inputEmail) {
                throw new BadRequestException('InvalidInput');
            }
            $targetUser = User::where('email', $input->get('email'))
                ->orWhere(function ($q) use ($inputEmail) {
                    $q->whereHas('company', function ($q) use($inputEmail) {
                        $q->where('email', $inputEmail);
                    });
                })->first();

            if ($targetUser) {
                # 找出想要訂閱的電子報分類
                $wantCategories = Item::whereIn('alias', $input->get('newsletterCategoriesAlias') ?: [])
                    ->whereHas('category', function ($q) {
                        $q->where('content_type', 'newsletter_category');
                    })
                    ->get();

                # 比對使用者可訂閱的電子報，取出交集的部分
                $availableCategoryIds = [];
                foreach ($wantCategories as $wantCategory) {
                    if ($wantCategory->newsletterUserGroups->pluck('id')->intersect($targetUser->accessGroupIds)->count()) {
                        $availableCategoryIds[] = $wantCategory->id;
                    }
                }

                $q = new QueryCapsule();
                $q->where('user_id', $targetUser->id)
                    ->orWhere('email', $inputEmail);
                # 找出是否有訂閱紀錄
                $subscription = $this->search(collect(['q' => $q]))->first();
                $data = [
                    'user_id' => $targetUser->id,
                    'email'   => $targetUser->email,
                    'newsletterCategoryIds' => $availableCategoryIds
                ];
            } else {
                $availableCategories = Item::whereIn('alias', $input->get('newsletterCategoriesAlias') ?:[])
                    ->whereHas('category', function ($q) {
                        $q->where('content_type', 'newsletter_category');
                    })
                    ->whereHas('newsletterUserGroups', function ($q) {
                        $q->whereIn('title', ['Public', 'Guest']);
                    })
                    ->get();

                # 找出是否有訂閱紀錄
                $subscription = $this->findBy('email', '=', $inputEmail)->first();

                $data = [
                    'email'   => $inputEmail,
                    'newsletterCategoryIds' => $availableCategories->pluck('id')->all()
                ];
            }
        }

        if ($subscription) {
            $data['id'] = $subscription->id;
            $this->modify(collect($data));
        } else {
            $subscription = $this->add(collect($data));
        }
        $this->edmProcessSubscription($inputEmail, $subscription); # 串接edm訂閱管理
        $this->response = null;
    }


    public function modifyMapping($item, $input)
    {
        $item->newsletterCategories()->sync($input->get('newsletterCategoryIds') ?: [], true);
    }
}
