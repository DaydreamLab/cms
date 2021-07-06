<?php
namespace DaydreamLab\Cms\Models\ProductCategory\Front;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;

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