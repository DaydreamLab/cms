<?php

namespace DaydreamLab\Cms\Repositories\Product;

use DaydreamLab\Cms\Models\Product\Product;
use DaydreamLab\Cms\Repositories\CmsRepository;

class ProductRepository extends CmsRepository
{
    protected $modelName = 'Product';

    public function __construct(Product $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
