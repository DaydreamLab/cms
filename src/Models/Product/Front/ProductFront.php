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


    protected $hidden = [
        'id',
        'product_category_id',
        'state',
        'created_by',
        'updated_by'
    ];
}