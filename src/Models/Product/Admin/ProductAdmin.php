<?php
namespace DaydreamLab\Cms\Models\Product\Admin;

use DaydreamLab\Cms\Models\Product\Product;

class ProductAdmin extends Product
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    protected $model_type = 'admin';
}