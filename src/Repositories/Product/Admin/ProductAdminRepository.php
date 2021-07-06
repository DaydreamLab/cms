<?php

namespace DaydreamLab\Cms\Repositories\Product\Admin;

use DaydreamLab\Cms\Models\Product\Admin\ProductAdmin;
use DaydreamLab\Cms\Repositories\Product\ProductRepository;

class ProductAdminRepository extends ProductRepository
{
    public function __construct(ProductAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
