<?php

namespace DaydreamLab\Cms\Controllers\Product\Front;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Services\cmsService;

class ProductFrontController extends cmsController
{
    protected $modelName = 'Product';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
