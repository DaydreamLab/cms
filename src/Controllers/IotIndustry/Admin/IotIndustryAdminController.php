<?php

namespace DaydreamLab\Cms\Controllers\IotIndustry\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminFeaturedRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminOrderingRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminStateRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Admin\IotIndustryAdminStoreRequest;
use DaydreamLab\Cms\Services\IotIndustry\Admin\IotIndustryAdminService;
use Throwable;

class IotIndustryAdminController extends CmsController
{
    protected $modelName = 'IotIndustry';

    public function __construct(IotIndustryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(IotIndustryAdminFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(IotIndustryAdminFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(IotIndustryAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(IotIndustryAdminOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(IotIndustryAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotIndustryAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotIndustryAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(IotIndustryAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotIndustryAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
