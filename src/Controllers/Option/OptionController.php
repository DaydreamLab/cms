<?php

namespace DaydreamLab\Cms\Controllers\Option;

use DaydreamLab\Cms\Requests\Option\OptionGetListPost;
use DaydreamLab\Cms\Services\Option\OptionService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;



class OptionController
{
    protected $service;

    public function __construct(OptionService $service)
    {
        $this->service = $service;
    }

    public function mergeList(OptionGetListPost $request)
    {
        $this->service->mergeList($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}