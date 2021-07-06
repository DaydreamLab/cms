<?php

namespace DaydreamLab\Cms\Controllers\ProductCategory\Admin;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Services\cmsService;

class ProductCategoryAdminController extends cmsController
{
    protected $modelName = 'ProductCategory';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
