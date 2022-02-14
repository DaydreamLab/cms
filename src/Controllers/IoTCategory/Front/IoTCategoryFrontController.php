<?php

namespace DaydreamLab\Cms\Controllers\IoTCategory\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontFeaturedRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontOrderingRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontRemoveRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontRestoreRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontSearchRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontStateRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontStoreRequest;
use DaydreamLab\Cms\Services\IoTCategory\Front\IoTCategoryFrontService;
use Throwable;

class IoTCategoryFrontController extends CmsController
{
    protected $modelName = 'IoTCategory';

    public function __construct(IoTCategoryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(IoTCategoryFrontFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(IoTCategoryFrontFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(IoTCategoryFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(IoTCategoryFrontOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(IoTCategoryFrontRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IoTCategoryFrontRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IoTCategoryFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(IoTCategoryFrontStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IoTCategoryFrontStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
