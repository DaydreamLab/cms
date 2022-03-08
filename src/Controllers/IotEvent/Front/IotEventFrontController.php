<?php

namespace DaydreamLab\Cms\Controllers\IotEvent\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotEvent\Front\IotEventFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotEvent\Front\IotEventFrontSearchRequest;
use DaydreamLab\Cms\Resources\IotEvent\Front\Collections\IotEventFrontSearchResourceCollection;
use DaydreamLab\Cms\Services\IotEvent\Front\IotEventFrontService;
use Throwable;

class IotEventFrontController extends CmsController
{
    protected $modelName = 'IotEvent';

    public function __construct(IotEventFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotEventFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotEventFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotEventFrontSearchResourceCollection::class);
    }

}
