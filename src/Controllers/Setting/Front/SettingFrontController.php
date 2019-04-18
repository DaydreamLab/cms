<?php

namespace DaydreamLab\Cms\Controllers\Setting\Front;

use DaydreamLab\Cms\Services\Setting\Front\SettingFrontService;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Symfony\Component\HttpFoundation\Request;

class SettingFrontController
{
    protected $service;

    public function __construct(SettingFrontService $service)
    {
        $this->service = $service;
    }

    public function getItem(Request $request, $locale)
    {
        $this->service->getItem($locale, $request->getHttpHost());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
