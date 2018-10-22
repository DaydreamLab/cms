<?php
namespace DaydreamLab\Cms\Models\Item\Front;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\Cms\Models\Item\Item;

class ItemFront extends Item
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';


    protected $hidden = [
        'category_id',
        'ordering',
        'state',
        'access',
        'featured_ordering',
        'language',
        'content_type',
        'params',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'updated_at',
        'updater',
    ];


    public function category()
    {
        return $this->belongsTo(CategoryFront::class, 'category_id', 'id');
    }
}