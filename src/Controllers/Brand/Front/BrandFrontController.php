<?php

namespace DaydreamLab\Cms\Controllers\Brand\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use use DaydreamLab\Cms\Services\Brand\Front\BrandFrontService;

class BrandFrontController extends CmsController
{
    protected $modelName = 'Brand';

    public function __construct(BrandFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
