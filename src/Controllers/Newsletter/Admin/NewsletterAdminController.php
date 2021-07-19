<?php

namespace DaydreamLab\Cms\Controllers\Newsletter\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Newsletter\Admin\NewsletterAdminGetItemRequest;
use DaydreamLab\Cms\Requests\Newsletter\Admin\NewsletterAdminRemoveRequest;
use DaydreamLab\Cms\Requests\Newsletter\Admin\NewsletterAdminRestoreRequest;
use DaydreamLab\Cms\Requests\Newsletter\Admin\NewsletterAdminSearchRequest;
use DaydreamLab\Cms\Requests\Newsletter\Admin\NewsletterAdminStateRequest;
use DaydreamLab\Cms\Requests\Newsletter\Admin\NewsletterAdminStoreRequest;
use DaydreamLab\Cms\Resources\Newsletter\Admin\Collections\NewsletterAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Newsletter\Admin\Models\NewsletterAdminResource;
use DaydreamLab\Cms\Services\Newsletter\Admin\NewsletterAdminService;
use Throwable;

class NewsletterAdminController extends CmsController
{
    protected $modelName = 'Newsletter';

    public function __construct(NewsletterAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(NewsletterAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], NewsletterAdminResource::class);
    }


    public function remove(NewsletterAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(NewsletterAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(NewsletterAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], NewsletterAdminListResourceCollection::class);
    }


    public function state(NewsletterAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(NewsletterAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], NewsletterAdminResource::class);
    }
}
