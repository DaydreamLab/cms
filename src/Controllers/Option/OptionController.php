<?php

namespace DaydreamLab\Cms\Controllers\Option;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Option\Admin\OptionAdminGetListPost;
use DaydreamLab\Cms\Services\Option\OptionService;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;


class OptionController extends CmsController
{
    protected $service;

    public function __construct(OptionService $service)
    {
        $this->service = $service;
    }

    public function mergeList(OptionAdminGetListPost $request)
    {
        $this->service->mergeList($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}