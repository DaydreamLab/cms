<?php

namespace DaydreamLab\cms\Repositories\Product\Admin;

use DaydreamLab\cms\Models\Product\Admin\ProductAdmin;
use DaydreamLab\cms\Repositories\Product\ProductRepository;

class ProductAdminRepository extends ProductRepository
{
    public function __construct(ProductAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
