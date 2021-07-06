<?php
namespace DaydreamLab\Cms\Models\ProductCategory\Admin;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;

class ProductCategoryAdmin extends ProductCategory
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'product_categories';

    protected $model_type = 'admin';
}