<?php

namespace DaydreamLab\Cms\Controllers\IotIndustry\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontFeaturedRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontOrderingRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontRemoveRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontRestoreRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontSearchRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontStateRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontStoreRequest;
use DaydreamLab\Cms\Services\IotIndustry\Front\IotIndustryFrontService;
use Throwable;

class IotIndustryFrontController extends CmsController
{
    protected $modelName = 'IotIndustry';

    public function __construct(IotIndustryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(IotIndustryFrontFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(IotIndustryFrontFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(IotIndustryFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(IotIndustryFrontOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(IotIndustryFrontRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotIndustryFrontRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotIndustryFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(IotIndustryFrontStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotIndustryFrontStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
