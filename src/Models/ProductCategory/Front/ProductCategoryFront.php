<?php
namespace DaydreamLab\cms\Models\ProductCategory\Front;

use DaydreamLab\cms\Models\ProductCategory\ProductCategory;

class ProductCategoryFront extends ProductCategory
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'product_categories';

    protected $model_type = 'front';
}