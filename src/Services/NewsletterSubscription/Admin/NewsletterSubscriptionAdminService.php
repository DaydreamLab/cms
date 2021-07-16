<?php

namespace DaydreamLab\Cms\Services\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Repositories\NewsletterSubscription\Admin\NewsletterSubscriptionAdminRepository;
use DaydreamLab\Cms\Services\NewsletterSubscription\NewsletterSubscriptionService;
use DaydreamLab\JJAJ\Traits\LoggedIn;

class NewsletterSubscriptionAdminService extends NewsletterSubscriptionService
{
    use LoggedIn;

    public function __construct(NewsletterSubscriptionAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
