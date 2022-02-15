<?php

namespace DaydreamLab\Cms\Controllers\IotCategory\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotCategory\Front\IotCategoryFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotCategory\Front\IotCategoryFrontSearchRequest;
use DaydreamLab\Cms\Services\IotCategory\Front\IotCategoryFrontService;
use Throwable;

class IotCategoryFrontController extends CmsController
{
    protected $modelName = 'IotCategory';

    public function __construct(IotCategoryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotCategoryFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotCategoryFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }

}
