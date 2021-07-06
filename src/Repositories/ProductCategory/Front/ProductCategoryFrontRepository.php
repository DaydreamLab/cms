<?php

namespace DaydreamLab\Cms\Repositories\ProductCategory\Front;

use DaydreamLab\Cms\Models\ProductCategory\Front\ProductCategoryFront;
use DaydreamLab\Cms\Repositories\ProductCategory\ProductCategoryRepository;

class ProductCategoryFrontRepository extends ProductCategoryRepository
{
    public function __construct(ProductCategoryFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
