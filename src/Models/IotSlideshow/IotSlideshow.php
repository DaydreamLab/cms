<?php

namespace DaydreamLab\Cms\Models\IotSlideshow;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class IotSlideshow extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_slideshows';

    protected $model_type = 'parent';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'alias',
        'title',
        'sub_title',
        'description',
        'url',
        'image',
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
}
