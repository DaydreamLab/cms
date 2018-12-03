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

    protected $hidden = [
        'id',
        'category_id',
        'state',
        'access',
        'ordering',
        'featured_ordering',
        'language',
        'content_type',
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
        'access_title'
    ];


    public function category()
    {
        return $this->belongsTo(CategoryFront::class, 'category_id', 'id');
    }


    public function tag()
    {
        return $this->belongsToMany(TagFront::class, 'items_tags_maps', 'item_id', 'tag_id');
    }


    public function getExtrafieldsAttribute($value)
    {
        $value = $value ? $value : json_encode([]);
        $data = [];
        foreach (json_decode($value) as $extra_field)
        {
            $extra_field_data = ExtrafieldFront::find($extra_field->id);
            $extra_field_data->value = $extra_field->value;
            $data[] = $extra_field_data->toArray();
            $this->{$extra_field_data->alias} = $extra_field->value;
        }

        return $data;
    }
}