<?php

namespace DaydreamLab\Cms\Controllers\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminGetItemRequest;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminSearchRequest;
use DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Collections\NewsletterSubscriptionAdminListResourceCollection;
use DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Models\NewsletterSubscriptionAdminResource;
use DaydreamLab\Cms\Services\NewsletterSubscription\Admin\NewsletterSubscriptionAdminService;
use Throwable;

class NewsletterSubscriptionAdminController extends CmsController
{
    protected $modelName = 'NewsletterSubscription';

    public function __construct(NewsletterSubscriptionAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(NewsletterSubscriptionAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user());
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], NewsletterSubscriptionAdminResource::class);
    }


    public function search(NewsletterSubscriptionAdminSearchRequest $request)
    {
        $this->service->setUser($request->user());
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], NewsletterSubscriptionAdminListResourceCollection::class);
    }
}
