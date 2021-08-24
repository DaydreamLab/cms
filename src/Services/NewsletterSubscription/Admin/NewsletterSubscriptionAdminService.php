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


    public function modifyMapping($item, $input)
    {
        $item->newsletterCategories()->sync($input->get('newsletterCategoryIds') ?: [], true);
    }


    public function removeMapping($item)
    {
        $item->newsletterCategories()->detach();
    }
}
