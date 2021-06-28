<?php

namespace DaydreamLab\cms\Repositories\ProductCategory\Admin;

use DaydreamLab\cms\Models\ProductCategory\Admin\ProductCategoryAdmin;
use DaydreamLab\cms\Repositories\ProductCategory\ProductCategoryRepository;

class ProductCategoryAdminRepository extends ProductCategoryRepository
{
    public function __construct(ProductCategoryAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
