<?php

namespace DaydreamLab\cms\Repositories\ProductCategory;

use DaydreamLab\cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\cms\Repositories\cmsRepository;

class ProductCategoryRepository extends cmsRepository
{
    protected $modelName = 'ProductCategory';

    public function __construct(ProductCategory $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
