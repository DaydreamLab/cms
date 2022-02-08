<?php

namespace DaydreamLab\Cms\Controllers\Solution;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Solution\SolutionFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionFeaturedRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionGetItemRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionOrderingRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionRemoveRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionRestoreRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionSearchRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionStateRequest;
use DaydreamLab\Cms\Requests\Solution\SolutionStoreRequest;
use DaydreamLab\Cms\Services\Solution\SolutionService;
use Throwable;

class SolutionController extends CmsController
{
    protected $modelName = 'Solution';

    public function __construct(SolutionService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(SolutionFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(SolutionFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(SolutionGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(SolutionOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(SolutionRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(SolutionRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(SolutionSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(SolutionStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SolutionStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
