<?php

namespace DaydreamLab\Cms\Repositories\ProductCategory\Admin;

use DaydreamLab\Cms\Models\ProductCategory\Admin\ProductCategoryAdmin;
use DaydreamLab\Cms\Repositories\ProductCategory\ProductCategoryRepository;

class ProductCategoryAdminRepository extends ProductCategoryRepository
{
    public function __construct(ProductCategoryAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
