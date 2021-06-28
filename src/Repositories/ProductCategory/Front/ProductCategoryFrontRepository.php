<?php

namespace DaydreamLab\cms\Repositories\ProductCategory\Front;

use DaydreamLab\cms\Models\ProductCategory\Front\ProductCategoryFront;
use DaydreamLab\cms\Repositories\ProductCategory\ProductCategoryRepository;

class ProductCategoryFrontRepository extends ProductCategoryRepository
{
    public function __construct(ProductCategoryFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
