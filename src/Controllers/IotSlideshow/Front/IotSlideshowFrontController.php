<?php

namespace DaydreamLab\Cms\Controllers\IotSlideshow\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotSlideshow\Front\IotSlideshowFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotSlideshow\Front\IotSlideshowFrontSearchRequest;
use DaydreamLab\Cms\Services\IotSlideshow\Front\IotSlideshowFrontService;
use Throwable;

class IotSlideshowFrontController extends CmsController
{
    protected $modelName = 'IotSlideshow';

    public function __construct(IotSlideshowFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotSlideshowFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotSlideshowFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }

}
