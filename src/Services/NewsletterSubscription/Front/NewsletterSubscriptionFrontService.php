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


    public function store(Collection $input, $isImoprt = false)
    {
        $user = Auth::guard('api')->user();
        $user = $user ? $user : $input->get('user');
        $newsletterCategories = Item::whereIn('alias', ['01_newsletter', '01_deal_newsletter'])->get();

        $datasets = [];
        if ($user && $isImoprt == false) {
            # 找出是否有訂閱紀錄
            $subscription = $this->findBy('user_id', '=', $user->id)->first();
            if ($user->groups->where('title', '經銷會員')->count()) {
                $category = $newsletterCategories->where('alias', '01_deal_newsletter')->first();
            } else {
                $category = $newsletterCategories->where('alias', '01_newsletter')->first();
            }

            $data = [
                'user_id' => $user->id,
                'email'   => $user->email,
                'newsletterCategoryIds' => $input->get('subscribeNewsletter') ? [$category->id] : []
            ];

            if ($subscription) {
                if ($subscription->email != $user->email) {
                    # 更換 email 時取消舊 email 訂閱
                    $ncs = $subscription->newsletterCategories->pluck('alias');
                    foreach ($ncs as $nc) {
                        $newsletterId = $nc == '01_deal_newsletter'
                            ? $this->dealNewsletterId
                            : $this->newsletterId;
                        $this->edmRemoveSubscription($subscription->email , $newsletterId);
                    }
                }
                $data['id'] = $subscription->id;
                $data['subscription'] = $subscription;
            }
            $datasets[] = $data;

            $inputEmail = $user->email;
        } else {
            $inputEmail =  $input->get('email');
            # 沒有登入會員一定要填 email
            if (!$inputEmail) {
                throw new BadRequestException('InvalidInput');
            }
            # 找出這個email相關的所有會員
            $targetUsers = User::where('email', $input->get('email'))
                ->orWhere(function ($q) use ($inputEmail) {
                    $q->whereHas('company', function ($q) use($inputEmail) {
                        $q->where('email', $inputEmail);
                    });
                })->get();
            if ($targetUsers->count()) {
                foreach ($targetUsers as $targetUser) {
                    $q = new QueryCapsule();
                    $q->where('user_id', $targetUser->id);

                    # 找出會員是否有訂閱紀錄
                    $subscription = $this->search(collect(['q' => $q]))->first();
                    if ($targetUser->groups->where('title', '經銷會員')->count()) {
                        $category = $newsletterCategories->where('alias', '01_deal_newsletter')->first();
                    } else {
                        $category = $newsletterCategories->where('alias', '01_newsletter')->first();
                    }

                    $data = [
                        'user_id' => $targetUser->id,
                        'email'   => $targetUser->email,
                        'newsletterCategoryIds' => $input->get('subscribeNewsletter') ? [$category->id] : []
                    ];
                    if ($subscription) {
                        $data['id'] = $subscription->id;
                        $data['subscription'] = $subscription;
                    }
                    $datasets[] = $data;
                }
            } else {
                # 找出是否有訂閱紀錄
                $subscription = $this->findBy('email', '=', $inputEmail)->first();
                $category = $newsletterCategories->where('alias', '01_newsletter')->first();

                $data = [
                    'email'   => $inputEmail,
                    'newsletterCategoryIds' => $input->get('subscribeNewsletter') ? [$category->id] : []
                ];
                if ($subscription) {
                    $data['id'] = $subscription->id;
                    $data['subscription'] = $subscription;
                }
                $datasets[] = $data;
            }
        }

        foreach ($datasets as $dataset) {
            if (isset($dataset['id'])) {
                $this->modify(collect($data));
                $this->edmProcessSubscription($inputEmail, $dataset['subscription']); # 串接edm訂閱管理
            } else {
                $subscription = $this->add(collect($data));
                $this->edmProcessSubscription($inputEmail, $subscription); # 串接edm訂閱管理
            }
        }

        $this->response = null;
    }


    public function modifyMapping($item, $input)
    {
        $item->newsletterCategories()->sync($input->get('newsletterCategoryIds') ?: []);
    }
}
