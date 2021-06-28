<?php
namespace DaydreamLab\cms\Models\ProductCategory\Admin;

use DaydreamLab\cms\Models\ProductCategory\ProductCategory;

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