<?php
namespace DaydreamLab\Cms\Models\Product\Front;

use DaydreamLab\Cms\Models\Product\Product;

class ProductFront extends Product
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    protected $model_type = 'front';
}