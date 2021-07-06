<?php

namespace DaydreamLab\Cms\Repositories\ProductCategory;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Repositories\cmsRepository;

class ProductCategoryRepository extends cmsRepository
{
    protected $modelName = 'ProductCategory';

    public function __construct(ProductCategory $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
