<?php
namespace DaydreamLab\cms\Models\Product\Front;

use DaydreamLab\cms\Models\Product\Product;

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