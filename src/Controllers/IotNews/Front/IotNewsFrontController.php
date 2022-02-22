<?php

namespace DaydreamLab\Cms\Controllers\IotNews\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotNews\Front\IotNewsFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotNews\Front\IotNewsFrontSearchRequest;
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


    public function getItem(IotNewsFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotNewsFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }

}
