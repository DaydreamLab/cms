<?php

namespace DaydreamLab\Cms\Controllers\Brand\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Services\CmsService;

class BrandFrontController extends CmsController
{
    protected $modelName = 'Brand';

    public function __construct(CmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
