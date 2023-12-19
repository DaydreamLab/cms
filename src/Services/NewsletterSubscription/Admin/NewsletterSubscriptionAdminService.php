<?php

namespace DaydreamLab\Cms\Services\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Repositories\NewsletterSubscription\Admin\NewsletterSubscriptionAdminRepository;
use DaydreamLab\Cms\Services\NewsletterSubscription\NewsletterSubscriptionService;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class NewsletterSubscriptionAdminService extends NewsletterSubscriptionService
{
    use LoggedIn;

    public function __construct(NewsletterSubscriptionAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $item->newsletterCategories()->attach($input->get('newsletterCategoryIds') ?: []);
    }


    public function afterAdd(Collection $input, $item)
    {
        $this->edmProcessSubscription($input->get('email'), $item->refresh());
    }


    public function afterModify(Collection $input, $item)
    {
        $this->edmProcessSubscription($input->get('email'), $item->refresh());
    }


    public function beforeModify(Collection &$input, &$item)
    {
        # 有修改 email 都會"取消"(移除)訂閱
        if ($item->email != $input->get('email')) {
            if ($input->has('newsletterCategories')) {
                $newsletterId = ($item->newsletterCategories->first()->alias == '01_newsletter')
                    ? $this->newsletterId
                    : $this->dealNewsletterId;
                $this->edmRemoveSubscription($item->email, $newsletterId);
            }
        }
    }

    public function modifyMapping($item, $input)
    {
        if ($input->has('newsletterCategoryIds')) {
            $categoryIds = is_array($input->get('newsletterCategoryIds')) ? $input->get('newsletterCategoryIds') : [];
            $item->newsletterCategories()->sync($categoryIds);
        }
    }


    public function removeMapping($item)
    {
        $item->newsletterCategories()->detach();
    }


    public function export(Collection $input)
    {
        return $this->search($input);
    }
}
