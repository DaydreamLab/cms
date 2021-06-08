<?php

namespace DaydreamLab\Cms\Controllers\Option;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Option\Admin\OptionAdminGetListPost;
use DaydreamLab\Cms\Services\Option\OptionService;
use DaydreamLab\JJAJ\Traits\ApiJsonResponse;
use Throwable;

class OptionController extends CmsController
{
    use ApiJsonResponse;

    protected $service;

    public function __construct(OptionService $service)
    {
        $this->service = $service;
    }

    public function mergeList(OptionAdminGetListPost $request)
    {
        try {
            $this->service->mergeList($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
