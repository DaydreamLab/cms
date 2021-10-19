<?php
namespace DaydreamLab\Cms\Models\Item\Front;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Brand\Front\BrandFront;
use DaydreamLab\Cms\Models\Tag\Front\TagFront;
use DaydreamLab\Cms\Models\Product\Front\ProductFront;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Media\Models\File\Front\FileFront;

class ItemFront extends Item
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';

    protected $order_by = 'publish_up';

    protected $order = 'desc';

    protected $model_type = 'front';

    protected $hidden = [
        'id',
        'category_id',
        'state',
        'access',
        'pivot',
        'ordering',
        //'featured_ordering',
        'hits',
        'language',
        'language_title',
        //'params',
        'creator_groups',
        'extrafield_group_id',
        //'extrafields',
        'locked_by',
        'locked_at',
        'locker',
        'created_by',
        'updated_by',
        'updated_at',
        'updater',
        'viewlevels',
        'viewlevel',
        'access_title',
        'extrafields_search',
        'extrafield_group_title',
        'category'
    ];


    public function category()
    {
        return $this->belongsTo(CategoryFront::class, 'category_id', 'id');
    }


    public function tags()
    {
        return $this->belongsToMany(TagFront::class, 'items_tags_maps', 'item_id', 'tag_id')->where('state', 1)
            ->where('state', 1);
    }


    public function brands()
    {
        return $this->belongsToMany(BrandFront::class, 'brands_items_maps', 'item_id', 'brand_id')
            ->where('state', 1)
            ->withTimestamps();
    }


    public function files()
    {
        return $this->belongsToMany(FileFront::class, 'items_files_maps', 'itemId', 'fileId', 'id', 'id')
            ->withTimestamps();
    }


    public function products()
    {
        return $this->belongsToMany(ProductFront::class, 'items_products_maps', 'item_id', 'product_id')
            ->where('state', 1)
            ->withTimestamps();
    }
}