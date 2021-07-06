<?php

namespace DaydreamLab\Cms\Controllers\ProductCategory\Front;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Services\cmsService;

class ProductCategoryFrontController extends cmsController
{
    protected $modelName = 'ProductCategory';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
