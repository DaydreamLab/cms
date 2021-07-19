<?php

namespace DaydreamLab\Cms\Controllers\ProductCategory\Front;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Services\ProductCategory\Front\ProductCategoryFrontService;
use Throwable;

class ProductCategoryFrontController extends cmsController
{
    protected $modelName = 'ProductCategory';

    public function __construct(ProductCategoryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
