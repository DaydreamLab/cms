<?php

namespace DaydreamLab\Cms\Repositories\Product;

use DaydreamLab\Cms\Models\Product\Product;
use DaydreamLab\Cms\Repositories\cmsRepository;

class ProductRepository extends cmsRepository
{
    protected $modelName = 'Product';

    public function __construct(Product $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
