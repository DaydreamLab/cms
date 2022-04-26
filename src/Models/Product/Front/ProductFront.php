<?php
namespace DaydreamLab\Cms\Models\Product\Front;

use DaydreamLab\Cms\Models\Product\Product;
use DaydreamLab\Cms\Models\Brand\Front\BrandFront;
use DaydreamLab\Cms\Models\ProductCategory\Front\ProductCategoryFront;

class ProductFront extends Product
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    protected $model_type = 'front';

    protected $order = 'desc';


    protected $hidden = [
        'id',
        'product_category_id',
        'state',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'locker',
        'pivot'
    ];


    public function brands()
    {
        return $this->belongsToMany(BrandFront::class, 'brands_products_maps', 'product_id', 'brand_id')
            ->where('state', 1)
            ->withTimestamps();
    }


    public function productCategory()
    {
        return $this->belongsTo(ProductCategoryFront::class, 'product_category_id', 'id')
            ->where('state', 1);
    }
}