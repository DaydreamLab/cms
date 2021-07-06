<?php

namespace DaydreamLab\Cms\Controllers\Product\Admin;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Services\cmsService;

class ProductAdminController extends cmsController
{
    protected $modelName = 'Product';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
