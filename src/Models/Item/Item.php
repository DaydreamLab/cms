<?php
namespace DaydreamLab\Cms\Models\Item;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;
use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;

class Item extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'category_id',
        'state',
        'introimage',
        'introtext',
        'image',
        'description',
        'video',
        'link',
        'hits',
        'access',
        'featured',
        'featured_ordering',
        'ordering',
        'language',
        'metadesc',
        'metakeywords',
        'params',
        'extrafield_group_id',
        'extrafields',
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
        'created_by',
        'updated_by',
        'viewlevels',
        'viewlevel',
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'category_title',
        'creator',
        'updater',
        'locker',
        'creator_groups',
        'tags',
        'viewlevels',
        'access_title'
    ];


    protected $casts = [
        'locked_at'     => 'datetime:Y-m-d H:i:s',
        'params'        => 'array',
        'extrafields'   => 'array'
    ];


    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }


    public function extrafieldGroup()
    {
        return $this->hasOne(ExtrafieldGroup::class, 'id', 'extrafield_group_id');
    }


    public function getAccessTitleAttribute()
    {
        return $this->viewlevel->title ?: null;
    }


    public function getCategoryAttribute()
    {
        return $this->category;
    }


    public function getCategoryTitleAttribute()
    {
        return $this->category()->first()->title;
    }


    public function getCreatorGroupsAttribute()
    {
        $groups = $this->creator()->groups;

        return $groups->map(function ($item, $key) {
            return $item->title;
        });

    }


    public function getExtrafieldsAttribute($value)
    {

        $value = $value ? $value : json_encode([]);
        $data = [];
        foreach (json_decode($value) as $extra_field)
        {
            $extra_field_data = Extrafield::find($extra_field->id);
            $extra_field_data->value = $extra_field->value;

            foreach ($extra_field->params as $key => $param)
            {
                $extra_field_data->{$key} = $param->value;
                $this->{$extra_field_data->alias . '_' . $key} = $param->value;
                Helper::show($extra_field_data->alias . '_' . $key);
            }

            $data[] = $extra_field_data->toArray();
        }

        return $data;
    }


    public function getExtrafieldGroupTitleAttribute()
    {
        $group = $this->extrafieldGroup()->first();

        return $group ? $group->title : null;
    }

    public function getTagsAttribute()
    {
        return $this->tag()->get();
    }

    public function getViewlevelsAttribute()
    {
        return $this->viewlevel->rules ?: [];
    }


    public function tag()
    {
        return $this->belongsToMany(Tag::class, 'items_tags_maps', 'item_id', 'tag_id')
                    ->where('state', 1);
    }


    public function viewlevel()
    {
        return $this->hasOne(Viewlevel::class, 'id', 'access');
    }
}