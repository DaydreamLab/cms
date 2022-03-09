<?php

namespace DaydreamLab\Cms\Controllers\IotNews\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotNews\Front\IotNewsFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotNews\Front\IotNewsFrontSearchRequest;
use DaydreamLab\Cms\Resources\IotNews\Front\Collections\IotNewsFrontSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotNews\Front\Models\IotNewsFrontResource;
use DaydreamLab\Cms\Services\IotNews\Front\IotNewsFrontService;
use Throwable;

class IotNewsFrontController extends CmsController
{
    protected $modelName = 'IotNews';

    public function __construct(IotNewsFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItemByAlias(IotNewsFrontGetItemRequest $request)
    {
        try {
            $this->service->getItemByAlias(collect(['alias' => $request->route('alias')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotNewsFrontResource::class);
    }


    public function search(IotNewsFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotNewsFrontSearchResourceCollection::class);
    }


    public function searchAll(IotNewsFrontSearchRequest $request)
    {
        try {
            $this->service->searchAll($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotNewsFrontSearchResourceCollection::class);
    }
}
