<?php

namespace DaydreamLab\Cms\Models\IotCategory;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class IotCategory extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_categories';

    protected $name = 'IotCategory';

    protected $order_by = 'ordering';

    protected $order = 'asc';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'description',
        'floor',
        'state',
        'access',
        'ordering',
        'params',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down'
    ];

    protected $hidden = [

    ];

    protected $casts = [
        'params'        => 'array',
        'locked_at'     => 'datetime:Y-m-d H:i:s',
        'publish_up'    => 'datetime:Y-m-d H:i:s',
        'publish_down'  => 'datetime:Y-m-d H:i:s'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public static function newFactory()
    {
    }


    public function childCategories()
    {
        return $this->belongsToMany(IotCategory::class, 'iot_categories_maps', 'parent_id', 'child_id')
            ->withTimestamps();
    }
}