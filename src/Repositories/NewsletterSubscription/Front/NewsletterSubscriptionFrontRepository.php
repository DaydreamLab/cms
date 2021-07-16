<?php

namespace DaydreamLab\Cms\Repositories\NewsletterSubscription\Front;

use DaydreamLab\Cms\Models\NewsletterSubscription\Front\NewsletterSubscriptionFront;
use DaydreamLab\Cms\Repositories\NewsletterSubscription\NewsletterSubscriptionRepository;

class NewsletterSubscriptionFrontRepository extends NewsletterSubscriptionRepository
{
    public function __construct(NewsletterSubscriptionFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
