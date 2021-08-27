<?php
namespace DaydreamLab\Cms\Models\Brand\Front;

use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Item\Front\ItemFront;
use DaydreamLab\Cms\Models\Tag\Front\TagFront;
use DaydreamLab\Cms\Models\Product\Front\ProductFront;
use DaydreamLab\Media\Models\File\Front\FileFront;

class BrandFront extends Brand
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands';

    protected $model_type = 'front';


    protected $hidden = [
        'id',
        'state',
        'updated_by',
        'created_by',
        'locked_by',
        'locked_at',
        'locker',
        'pivot'
    ];
    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [

    ];


    public function items()
    {
        return $this->belongsToMany(ItemFront::class, 'brands_items_maps', 'brand_id', 'item_id')
            ->withTimestamps();
    }


    public function files()
    {
        return $this->belongsToMany(FileFront::class, 'brands_files_maps', 'brand_id', 'file_id')
            ->withTimestamps();
    }


    public function tags()
    {
        return $this->belongsToMany(TagFront::class, 'brands_tags_maps', 'brand_id', 'tag_id');
    }


    public function products()
    {
        return $this->belongsToMany(ProductFront::class, 'brands_products_maps', 'brand_id', 'product_id')
            ->withTimestamps();
    }


    public function getItemsAttribute()
    {
        $items = $this->items()->with('brands')->get();
        $data = [];
        foreach ($items as $item) {
            $data[$item->category->content_type][] = $item;
        }

        return $data;
    }
}