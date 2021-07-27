<?php

namespace DaydreamLab\Cms\Controllers\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminGetItemRequest;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminSearchRequest;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminRemoveRequest;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminRestoreRequest;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminStateRequest;
use DaydreamLab\Cms\Requests\NewsletterSubscription\Admin\NewsletterSubscriptionAdminStoreRequest;
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


    public function remove(NewsletterSubscriptionAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(NewsletterSubscriptionAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
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


    public function state(NewsletterSubscriptionAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(NewsletterSubscriptionAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], NewsletterSubscriptionAdminResource::class);
    }
}
