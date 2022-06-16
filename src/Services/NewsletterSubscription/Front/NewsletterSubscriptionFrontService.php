<?php

namespace DaydreamLab\Cms\Services\NewsletterSubscription\Front;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Repositories\NewsletterSubscription\Front\NewsletterSubscriptionFrontRepository;
use DaydreamLab\Cms\Services\NewsletterSubscription\NewsletterSubscriptionService;
use DaydreamLab\JJAJ\Exceptions\BadRequestException;
use Illuminate\Support\Collection;

class NewsletterSubscriptionFrontService extends NewsletterSubscriptionService
{
    protected $itemRepository;

    public function __construct(NewsletterSubscriptionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $item->newsletterCategories()->sync($input->get('newsletterCategoryIds') ?: []);
    }


    public function store(Collection $input, $isImoprt = false)
    {
        if ($input->get('subscribeNewsletter')) {
            $this->subscribe($input);
        } else {
            $this->unsubscribe($input);
        }

        $this->response = null;

        return $this->response;
    }

    public function subscribe(Collection $input)
    {
        $newsletterCategories = Item::whereIn('alias', ['01_newsletter', '01_deal_newsletter'])->get();

        if ($user = $input->get('user')) {
            $subscribeNewsletterId = $user->groups->whereIn('title', ['經銷會員', '零壹員工'])->count()
                ? $this->dealNewsletterId
                : $this->newsletterId;
            $subCategoryId =  $user->groups->whereIn('title', ['經銷會員', '零壹員工'])->count()
                ? $newsletterCategories->where('alias', '01_deal_newsletter')->first()->id
                : $newsletterCategories->where('alias', '01_newsletter')->first()->id;

            $subscription = $user->newsletterSubscription;
            # 更換 email
            if ($subscription && $subscription->email != $user->email) {
                # 取消本身的 email 訂閱
                $ncs = $subscription->newsletterCategories->pluck('alias');
                foreach ($ncs as $nc) {
                    $newsletterId = $nc == '01_deal_newsletter'
                        ? $this->dealNewsletterId
                        : $this->newsletterId;
                    $this->edmRemoveSubscription($subscription->email, $newsletterId);
                }
            }

            $data = [
                'id'                    => $subscription ? $subscription->id : null,
                'user_id'               => $user->id,
                'email'                 => $user->email,
                'newsletterCategoryIds' => [$subCategoryId]
            ];
            if ($data['id']) {
                $this->modify(collect($data));
            } else {
                $this->add(collect($data));
            }

            $this->edmAddSubscription($user->email, $subscribeNewsletterId); # 串接edm訂閱管理
        } else {
            $inputEmail =  $input->get('email');
            # 沒有登入會員一定要填 email
            if (!$inputEmail) {
                throw new BadRequestException('InvalidInput');
            }

            $subCategoryId = $newsletterCategories->where('alias', '01_newsletter')->first()->id;
            $subs = $this->findBy('email', '=', $inputEmail);
            if ($subs->count()) {
                foreach ($subs as $sub) {
                    if ($sub->user) {
                        if ($sub->user->groups->whereIn('title', ['經銷會員', '零壹員工'])->count()) {
                            $subCategoryId = $newsletterCategories->where('alias', '01_deal_newsletter')->first()->id;
                            $this->edmRemoveSubscription($sub->email, $this->newsletterId);
                            $this->edmAddSubscription($sub->email, $this->dealNewsletterId);
                        } else {
                            $this->edmRemoveSubscription($sub->email, $this->dealNewsletterId);
                            $this->edmAddSubscription($sub->email, $this->newsletterId);
                        }
                    } else {
                        $this->edmRemoveSubscription($sub->email, $this->dealNewsletterId);
                        $this->edmAddSubscription($sub->email, $this->newsletterId);
                    }

                    $this->modify(collect([
                        'id'    => $sub->id,
                        'newsletterCategoryIds' => [$subCategoryId]
                    ]));
                }
            } else {
                $data = [
                    'email'                 => $input->get('email'),
                    'newsletterCategoryIds' => [$subCategoryId]
                ];
                $this->add(collect($data));
                $this->edmAddSubscription($inputEmail, $this->newsletterId); # 串接edm訂閱管理
            }
        }
        $this->status = 'SubscribeSuccess';

        return;
    }


    public function unsubscribe(Collection $input)
    {
        if ($user = $input->get('user')) {
            $subscription = $user->newsletterSubscription;
            if ($subscription) {
                $categoryAlias = $subscription->newsletterCategories->pluck('alias');
                foreach ($categoryAlias as $ca) {
                    $newsletterId = $ca == '01_deal_newsletter'
                        ? $this->dealNewsletterId
                        : $this->newsletterId;
                    $this->edmRemoveSubscription($subscription->email, $newsletterId);
                }

                $data = [
                    'id'                    => $subscription ? $subscription->id : null,
                    'user_id'               => $user->id,
                    'email'                 => $user->email,
                    'newsletterCategoryIds' => []
                ];
                $this->modify(collect($data));
            } else {
                if ($user->groups->where('title', '經銷會員')->count()) {
                    $user->email
                        ? $this->edmRemoveSubscription($user->email, 9)
                        : null;
                } else {
                    $user->email
                        ? $this->edmRemoveSubscription($user->email, 8)
                        : null;
                }
            }
        } else {
            $inputEmail =  $input->get('email');
            # 沒有登入會員一定要填 email
            if (!$inputEmail) {
                throw new BadRequestException('InvalidInput');
            }

            $subs = $this->findBy('email', '=', $inputEmail);
            if ($subs->count()) {
                foreach ($subs as $sub) {
                    foreach ($sub->newsletterCategories->pluck('alias') as $alias) {
                        $newsletterId = $alias == '01_deal_newsletter'
                            ? $this->dealNewsletterId
                            : $this->newsletterId;
                        $this->edmRemoveSubscription($sub->email, $newsletterId);
                    }
                    $data = [
                        'id'                    => $sub->id,
                        'newsletterCategoryIds' => []
                    ];
                    $this->modify(collect($data));
                }
            } else {
                $this->edmRemoveSubscription($inputEmail, 0);
            }
        }

        $this->status = 'UnsubscribeSuccess';

        return;
    }


    public function modifyMapping($item, $input)
    {
        $item->newsletterCategories()->sync($input->get('newsletterCategoryIds') ?: []);
    }
}
