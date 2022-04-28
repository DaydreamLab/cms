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
        $newsletterCategories = Item::whereIn('alias', ['01_newsletter', '01_dealer_newsletter'])->get();
        if ($user && $isImoprt == false) {
            # 找出是否有訂閱紀錄
            $subscription = $this->findBy('user_id', '=', $user->id)->first();
            if ($user->groups->where('title', '經銷會員')->count()) {
                $category = $newsletterCategories->where('alias', '01_dealer_newsletter')->first();
            } else {
                $category = $newsletterCategories->where('alias', '01_newsletter')->first();
            }

            $data = [
                'user_id' => $user->id,
                'email'   => $user->email,
                'newsletterCategoryIds' => [$category->id]
            ];
            $inputEmail = $user->email;
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
                $q = new QueryCapsule();
                $q->where('user_id', $targetUser->id)
                    ->orWhere('email', $inputEmail);
                # 找出是否有訂閱紀錄
                $subscription = $this->search(collect(['q' => $q]))->first();

                if ($user->groups->where('title', '經銷會員')->count()) {
                    $category = $newsletterCategories->where('alias', '01_dealer_newsletter')->first();
                } else {
                    $category = $newsletterCategories->where('alias', '01_newsletter')->first();
                }

                $data = [
                    'user_id' => $targetUser->id,
                    'email'   => $targetUser->email,
                    'newsletterCategoryIds' => [$category->id]
                ];
            } else {
                # 找出是否有訂閱紀錄
                $subscription = $this->findBy('email', '=', $inputEmail)->first();
                $category = $newsletterCategories->where('alias', '01_newsletter')->first();

                $data = [
                    'email'   => $inputEmail,
                    'newsletterCategoryIds' => [$category->id]
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
