<?php

namespace DaydreamLab\Cms\Repositories\Product\Front;

use DaydreamLab\Cms\Models\Product\Front\ProductFront;
use DaydreamLab\Cms\Repositories\Product\ProductRepository;

class ProductFrontRepository extends ProductRepository
{
    public function __construct(ProductFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
