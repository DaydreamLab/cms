<?php

namespace DaydreamLab\Cms\Controllers\IotTag\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotTag\Front\IotTagFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotTag\Front\IotTagFrontSearchRequest;
use DaydreamLab\Cms\Services\IotTag\Front\IotTagFrontService;
use Throwable;

class IotTagFrontController extends CmsController
{
    protected $modelName = 'IotTag';

    public function __construct(IotTagFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotTagFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotTagFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }

}
