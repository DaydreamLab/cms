<?php

namespace DaydreamLab\Cms\Controllers\Setting\Admin;

use DaydreamLab\Cms\Services\Setting\Admin\SettingAdminService;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;


class SettingAdminController
{
    protected $service;

    public function __construct(SettingAdminService $service)
    {
        $this->service = $service;
    }

    public function getItem()
    {
        $this->service->getItem();

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
