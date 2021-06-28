<?php

namespace DaydreamLab\cms\Controllers\Product\Admin;

use DaydreamLab\cms\Controllers\cmsController;
use DaydreamLab\cms\Services\cmsService;

class ProductAdminController extends cmsController
{
    protected $modelName = 'Product';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
