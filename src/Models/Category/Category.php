<?php

namespace DaydreamLab\Cms\Models\Category;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\Cms\Traits\WithExtrafield;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use DaydreamLab\User\Traits\Model\WithAccess;
use Illuminate\Support\Str;
use Kalnoy\Nestedset\NodeTrait;

class Category extends BaseModel
{
    use NodeTrait, WithAccess, WithLanguage, WithExtrafield, UserInfo,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';


    protected $model_type = 'parent';


    protected $order_by = 'id';

    protected $order = 'asc';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'state',
        'path',
        'state',
        'introimage',
        'introtext',
        'image',
        'description',
        'content_type',
        'extension',
        'hits',
        'access',
        'language',
        'template',
        'ordering',
        'featured',
        'featured_ordering',
        'params',
        'item_extrafield_group_id',
        'extrafield_group_id',
        'extrafields',
        'extrafields_search',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down',
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        '_lft',
        '_rgt',
        'ancestors',
        'viewlevel',
        'viewlevels',
        'extrafields_search',
        //'extrafield_group',
        //'extrafield_group_title'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'tree_title',
        'tree_list_title',
        'access_title',
        'language_title',
        'extrafield_group_title',
    ];


    protected $casts = [
        'extrafields'   => 'array',
        'params'        => 'array',
    ];


    public static function boot()
    {
        self::traitBoot();

        static::creating(function ($item) {
            if ($item->state && !$item->publish_up) {
                $item->publish_up = now();
            }

            if (!$item->alias) {
                $item->alias = Str::random(8);
            }

            $item->path = $item->parent
                ? $item->parent->path . '/' . $item->alias
                : '/' . $item->alias;
        });
    }


    public function items()
    {
        return $this->hasMany(Item::class, 'category_id', 'id');
    }
}
