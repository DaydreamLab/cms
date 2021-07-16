<?php

namespace DaydreamLab\Cms\Repositories\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Models\NewsletterSubscription\Admin\NewsletterSubscriptionAdmin;
use DaydreamLab\Cms\Repositories\NewsletterSubscription\NewsletterSubscriptionRepository;

class NewsletterSubscriptionAdminRepository extends NewsletterSubscriptionRepository
{
    public function __construct(NewsletterSubscriptionAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
