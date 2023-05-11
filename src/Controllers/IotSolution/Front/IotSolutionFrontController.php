<?php

namespace DaydreamLab\Cms\Controllers\IotSolution\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotSolution\Front\IotSolutionFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotSolution\Front\IotSolutionFrontSearchRequest;
use DaydreamLab\Cms\Resources\IotSolution\Front\Models\IotSolutionFrontResource;
use DaydreamLab\Cms\Services\IotSolution\Front\IotSolutionFrontService;
use Throwable;

class IotSolutionFrontController extends CmsController
{
    protected $modelName = 'Solution';

    public function __construct(IotSolutionFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItemByAlias(IotSolutionFrontGetItemRequest $request)
    {
        try {
            $this->service->getItemByAlias(collect(['alias' => $request->route('alias')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotSolutionFrontResource::class);
    }


    public function optionList()
    {
        try {
            $this->service->optionList();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotSolutionFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}