<?php

namespace DaydreamLab\Cms\Models\Tag;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\User\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\UserInfo;
use Illuminate\Support\Str;
use Kalnoy\Nestedset\NodeTrait;
use DaydreamLab\JJAJ\Traits\RecordChanger;

class Tag extends BaseModel
{
    use NodeTrait, WithLanguage, WithAccess, UserInfo,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tags';

    protected $model_type = 'parent';

    protected $order_by = 'id';

    protected $order = 'asc';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id',
        'title',
        'alias',
        'path',
        'state',
        'description',
        'extension',
        'content_type',
        'hits',
        'access',
        'language',
        'ordering',
        'featured',
        'featured_ordering',
        'params',
        'publish_up',
        'publish_down',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        'pivot',
//        '_lft',
//        '_rgt',
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'access_title',
        'language_title'
    ];


    protected $casts = [
        'params'        => 'array',
        'extrafields'   => 'array',
        'locked_at'     => 'datetime:Y-m-d H:i:s',
        'publish_up'    => 'datetime:Y-m-d H:i:s',
        'publish_down'  => 'datetime:Y-m-d H:i:s',
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
        return $this->belongsToMany(Item::class, 'items_tags_maps', 'tag_id', 'item_id');
    }
}
