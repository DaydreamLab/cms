<?php

namespace DaydreamLab\cms\Controllers\Product\Front;

use DaydreamLab\cms\Controllers\cmsController;
use DaydreamLab\cms\Services\cmsService;

class ProductFrontController extends cmsController
{
    protected $modelName = 'Product';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
