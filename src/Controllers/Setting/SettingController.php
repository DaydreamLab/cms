<?php

namespace DaydreamLab\Cms\Controllers\Setting;

use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;


class SettingController
{
    protected $service;

    public function __construct(SettingService $service)
    {
        $this->service = $service;
    }

    public function getItem()
    {
        $this->service->getItem('');

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
