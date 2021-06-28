<?php

namespace DaydreamLab\cms\Repositories\Product;

use DaydreamLab\cms\Models\Product\Product;
use DaydreamLab\cms\Repositories\cmsRepository;

class ProductRepository extends cmsRepository
{
    protected $modelName = 'Product';

    public function __construct(Product $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
