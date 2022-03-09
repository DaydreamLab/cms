<?php

namespace DaydreamLab\Cms\Models\IotEvent;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class IotEvent extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_events';

    protected $model_type = 'parent';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'alias',
        'title',
        'introimage',
        'introtext',
        'description',
        'start_date',
        'end_date',
        'status',
        'contacts',
        'city',
        'district',
        'address',
        'locationName',
        'permission',
        'sponsors',
        'url',
        'state',
        'access',
        'ordering',
        'featured',
        'featured_ordering',
        'params',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down',
        'created_by',
        'updated_by'
    ];


    protected $casts = [
        'start_date'    => 'datetime:Y-m-d H:i:s',
        'end_date'      => 'datetime:Y-m-d H:i:s',
        'contacts'      => 'array',
        'sponsors'      => 'array',
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
