<?php
namespace DaydreamLab\cms\Models\Product\Admin;

use DaydreamLab\cms\Models\Product\Product;

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