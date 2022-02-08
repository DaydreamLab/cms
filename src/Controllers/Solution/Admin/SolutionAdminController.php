<?php

namespace DaydreamLab\Cms\Controllers\Solution\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminFeaturedRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminGetItemRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminOrderingRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminRemoveRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminRestoreRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminSearchRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminStateRequest;
use DaydreamLab\Cms\Requests\Solution\Admin\SolutionAdminStoreRequest;
use DaydreamLab\Cms\Services\Solution\Admin\SolutionAdminService;
use Throwable;

class SolutionAdminController extends CmsController
{
    protected $modelName = 'Solution';

    public function __construct(SolutionAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(SolutionAdminFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(SolutionAdminFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(SolutionAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(SolutionAdminOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(SolutionAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(SolutionAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(SolutionAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(SolutionAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SolutionAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
