<?php

namespace DaydreamLab\cms\Repositories\Product\Front;

use DaydreamLab\cms\Models\Product\Front\ProductFront;
use DaydreamLab\cms\Repositories\Product\ProductRepository;

class ProductFrontRepository extends ProductRepository
{
    public function __construct(ProductFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
