<?php

namespace DaydreamLab\Cms\Controllers\IotResource\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotResource\Front\IotResourceFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotResource\Front\IotResourceFrontSearchRequest;
use DaydreamLab\Cms\Services\IotResource\Front\IotResourceFrontService;
use Throwable;

class IotResourceFrontController extends CmsController
{
    protected $modelName = 'Resource';

    public function __construct(IotResourceFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotResourceFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotResourceFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }

}
