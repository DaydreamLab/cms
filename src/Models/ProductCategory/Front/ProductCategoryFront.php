<?php
namespace DaydreamLab\Cms\Models\ProductCategory\Front;

use DaydreamLab\Cms\Models\Product\Front\ProductFront;
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

    protected $hidden = [
        'id',
        'parent_id',
        '_lft',
        '_rgt',
        'state',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'locker'
    ];


    public function products()
    {
        return $this->hasMany(ProductFront::class, 'product_category_id', 'id');
    }
}
