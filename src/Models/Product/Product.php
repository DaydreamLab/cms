<?php

namespace DaydreamLab\Cms\Models\Product;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Models\BaseModel;

class Product extends BaseModel
{
    use RecordChanger, UserInfo {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';


    protected $model_type = 'parent';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_category_id',
        'alias',
        'title',
        'description',
        'products',
        'files',
        'state',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'publish_up',
        'publish_down',
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
    ];


    protected $casts = [
        'products' => 'array',
        'files' => 'array',
        'locked_at' => 'datetime:Y-m-d H:i:s',
        'publish_up' => 'datetime:Y-m-d H:i:s',
        'publish_down' => 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function brands()
    {
        return $this->belongsToMany(Brand::class, 'brands_products_maps', 'product_id', 'brand_id')
            ->withTimestamps();
    }


    public function productCategory()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id', 'id');
    }
}