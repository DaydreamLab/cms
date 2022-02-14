<?php

namespace DaydreamLab\Cms\Controllers\IoTCategory\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Front\IoTCategoryFrontSearchRequest;
use DaydreamLab\Cms\Services\IoTCategory\Front\IoTCategoryFrontService;
use Throwable;

class IoTCategoryFrontController extends CmsController
{
    protected $modelName = 'IoTCategory';

    public function __construct(IoTCategoryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IoTCategoryFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IoTCategoryFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }

}
