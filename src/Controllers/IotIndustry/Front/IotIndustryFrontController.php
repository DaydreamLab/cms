<?php

namespace DaydreamLab\Cms\Controllers\IotIndustry\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotIndustry\Front\IotIndustryFrontSearchRequest;
use DaydreamLab\Cms\Services\IotIndustry\Front\IotIndustryFrontService;
use Throwable;

class IotIndustryFrontController extends CmsController
{
    protected $modelName = 'IotIndustry';

    public function __construct(IotIndustryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotIndustryFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotIndustryFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }

}
