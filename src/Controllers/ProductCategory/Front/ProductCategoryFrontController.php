<?php

namespace DaydreamLab\cms\Controllers\ProductCategory\Front;

use DaydreamLab\cms\Controllers\cmsController;
use DaydreamLab\cms\Services\cmsService;

class ProductCategoryFrontController extends cmsController
{
    protected $modelName = 'ProductCategory';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
