<?php
namespace DaydreamLab\Cms\Models\Brand\Front;

use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Item\Front\ItemFront;

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
        'updated_by',
        'created_by'
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


    public function getItemsAttribute()
    {
        $items = $this->items()->get();
        $data = [];
        foreach ($items as $item) {
            $data[$item->category->content_type][] = $item;
        }

        return $data;
    }
}