<?php

namespace DaydreamLab\cms\Controllers\ProductCategory\Admin;

use DaydreamLab\cms\Controllers\cmsController;
use DaydreamLab\cms\Services\cmsService;

class ProductCategoryAdminController extends cmsController
{
    protected $modelName = 'ProductCategory';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
