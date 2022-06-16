<?php

namespace DaydreamLab\Cms\Repositories\NewsletterSubscription;

use DaydreamLab\Cms\Models\NewsletterSubscription\NewsletterSubscription;
use DaydreamLab\Cms\Repositories\CmsRepository;

class NewsletterSubscriptionRepository extends CmsRepository
{
    protected $modelName = 'NewsletterSubscription';

    public function __construct(NewsletterSubscription $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }


    public function restore($item, $user)
    {
        # 前台更新會跟後台衝突 locked_by
        return true;
    }
}
