<?php

namespace DaydreamLab\Cms\Controllers\Product\Front;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Services\Product\Front\ProductFrontService;
use Throwable;

class ProductFrontController extends cmsController
{
    protected $modelName = 'Product';

    public function __construct(ProductFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
