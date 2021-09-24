<?php

namespace DaydreamLab\Cms\Repositories\ProductCategory;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Repositories\CmsRepository;

class ProductCategoryRepository extends CmsRepository
{
    protected $modelName = 'ProductCategory';

    public function __construct(ProductCategory $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }


    public function findDescendantOf($id)
    {
        return $this->model->whereDescendantOf($id)->get();
    }
    

    public function findSubTreeIds($id)
    {
        $category = $this->find($id);
        $descendants = $category->descendants->pluck('id')->all();
        $descendants[] = $id;

        return $descendants;
    }
}
