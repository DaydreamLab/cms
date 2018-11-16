<?php

namespace DaydreamLab\Cms\Controllers\Setting\Front;

use DaydreamLab\Cms\Services\Setting\Front\SettingFrontService;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;


class SettingFrontController
{
    protected $service;

    public function __construct(SettingFrontService $service)
    {
        $this->service = $service;
    }

    public function getItem()
    {
        $this->service->getItem();

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
