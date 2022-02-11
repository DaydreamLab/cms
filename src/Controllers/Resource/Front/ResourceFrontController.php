<?php

namespace DaydreamLab\Cms\Controllers\Resource\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontFeaturedRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontGetItemRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontOrderingRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontRemoveRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontRestoreRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontSearchRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontStateRequest;
use DaydreamLab\Cms\Requests\Resource\Front\ResourceFrontStoreRequest;
use DaydreamLab\Cms\Services\Resource\Front\ResourceFrontService;
use Throwable;

class ResourceFrontController extends CmsController
{
    protected $modelName = 'Resource';

    public function __construct(ResourceFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(ResourceFrontFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(ResourceFrontFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(ResourceFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(ResourceFrontOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ResourceFrontRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ResourceFrontRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ResourceFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ResourceFrontStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ResourceFrontStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
