<?php

namespace DaydreamLab\Cms\Controllers\NewsletterSubscription\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Front\NewsletterSubscriptionFrontStoreRequest;
use DaydreamLab\Cms\Services\NewsletterSubscription\Front\NewsletterSubscriptionFrontService;
use Throwable;

class NewsletterSubscriptionFrontController extends CmsController
{
    protected $modelName = 'NewsletterSubscription';

    public function __construct(NewsletterSubscriptionFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function store(NewsletterSubscriptionFrontStoreRequest $request)
    {
//        try {
            $this->service->store($request->validated());
//        } catch (Throwable $t) {
//            $this->handleException($t);
//        }

        return $this->response($this->service->status, $this->service->response);
    }
}
