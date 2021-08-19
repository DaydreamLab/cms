<?php

namespace DaydreamLab\Cms\Models\Product;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

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
        'product_data',
        'files',
        'params',
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
        'brand_title',
        'parent_category',
        'category'
    ];


    protected $casts = [
        'product_data' => 'array',
        'files' => 'array',
        'params' => 'array',
        'locked_at' => 'datetime:Y-m-d H:i:s',
        'publish_up' => 'datetime:Y-m-d H:i:s',
        'publish_down' => 'datetime:Y-m-d H:i:s'
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


    public function items()
    {
        return $this->belongsToMany(Item::class, 'items_products_maps', 'product_id', 'item_id')
            ->withTimestamps();
    }


    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'products_tags_maps', 'product_id', 'tag_id')
            ->withTimestamps();
    }


    public function getBrandTitleAttribute()
    {
        return $this->brands->map(function($b) {
            return $b->title;
        });
    }


    public function productCategory()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id', 'id');
    }


    public function getCategoryAttribute()
    {
        return ($this->productCategory) ? $this->productCategory->title : '';
    }


    public function getParentCategoryAttribute()
    {
        $category = $this->productCategory;
        return ($category && $category->parent) ? $category->parent->title : '';
    }
}