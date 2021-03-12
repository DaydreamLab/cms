<?php
namespace DaydreamLab\Cms\Models\Item\Front;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Tag\Front\TagFront;
use DaydreamLab\JJAJ\Helpers\Helper;

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
        //'ordering',
        //'featured_ordering',
        //'language',
        'params',
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
        return $this->belongsToMany(TagFront::class, 'items_tags_maps', 'item_id', 'tag_id');
    }


    public function categorySiblings()
    {
        return $this->where('category_id', '=', $this->category_id)->where('state', '=', 1)->orderBy('publish_up', 'asc');
    }


    public function getPrevSiblingAttribute()
    {
        $siblings = $this->categorySiblings()->get();
        $current_pos = $siblings->search(function ($i, $key) {
            return $i->alias == $this->alias;
        });
        $prev_pos = $current_pos-1;
        return $siblings->slice( ( ($prev_pos <= 0) ? $prev_pos+$siblings->count() : $prev_pos ) % $siblings->count(), 1)->first();
    }


    public function getNextSiblingAttribute()
    {
        $siblings = $this->categorySiblings()->get();
        $current_pos = $siblings->search(function ($i, $key) {
            return $i->alias == $this->alias;
        });
        $next_pos = $current_pos+1;
        return $siblings->slice( $next_pos % $siblings->count(), 1)->first();
    }
}