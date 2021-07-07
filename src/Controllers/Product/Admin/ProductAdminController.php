<?php

namespace DaydreamLab\Cms\Controllers\Product\Admin;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Services\Product\Admin\ProductAdminService;

class ProductAdminController extends cmsController
{
    protected $modelName = 'Product';

    public function __construct(ProductAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
