<?php
namespace DaydreamLab\Cms\Models\Item\Front;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Tag\Front\TagFront;

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

    protected $hidden = [
        'category_id',
        'state',
        'access',
        'ordering',
        'featured_ordering',
        'language',
        'content_type',
        'params',
        'locked_by',
        'locked_at',
        'locker',
        'created_by',
        'updated_by',
        'updated_at',
        'updater',
        'viewlevels'
    ];


    public function category()
    {
        return $this->belongsTo(CategoryFront::class, 'category_id', 'id');
    }


    public function tag()
    {
        return $this->belongsToMany(TagFront::class, 'items_tags_maps', 'item_id', 'tag_id');
    }
}