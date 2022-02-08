<?php

namespace DaydreamLab\Cms\Controllers\Solution\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontFeaturedRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontGetItemRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontOrderingRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontRemoveRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontRestoreRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontSearchRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontStateRequest;
use DaydreamLab\Cms\Requests\Solution\Front\SolutionFrontStoreRequest;
use DaydreamLab\Cms\Services\Solution\Front\SolutionFrontService;
use Throwable;

class SolutionFrontController extends CmsController
{
    protected $modelName = 'Solution';

    public function __construct(SolutionFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(SolutionFrontFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(SolutionFrontFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(SolutionFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(SolutionFrontOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(SolutionFrontRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(SolutionFrontRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(SolutionFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(SolutionFrontStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SolutionFrontStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
