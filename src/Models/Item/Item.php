<?php
namespace DaydreamLab\Cms\Models\Item;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldAdmin;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;
use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\Cms\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\Cms\Traits\WithExtrafield;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;

class Item extends BaseModel
{
    use WithAccess, WithExtrafield, WithCategory, WithLanguage,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';


    protected $model_type = 'parent';

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
        'extrafields_search',
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
        'extrafields_search'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'creator',
        'updater',
        'locker',
        'creator_groups',
        'tags',
        'viewlevels',
        'category_title',
        'category_alias',
        'access_title',
        'language_title',
        'extrafield_group_title'
    ];


    protected $casts = [
        'params' => 'array',
        'extrafields' => 'array',
        'locked_at' => 'datetime:Y-m-d H:i:s',
        'publish_up' => 'datetime:Y-m-d H:i:s',
        'publish_down' => 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function getCreatorGroupsAttribute()
    {
        $creator = $this->creator()->first();

        if ($creator)
        {
            return $creator->groups->map(function ($item, $key) {
                return $item->title;
            });
        }
        else
        {
            return null;
        }
    }


    public function getTagsAttribute()
    {
        return $this->tag()->get();
    }


    public function tag()
    {
        return $this->belongsToMany(Tag::class, 'items_tags_maps', 'item_id', 'tag_id')
            ->where('state', 1);
    }

}