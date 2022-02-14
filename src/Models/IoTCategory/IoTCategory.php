<?php

namespace DaydreamLab\Cms\Models\IoTCategory;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class IoTCategory extends CmsModel
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


    protected $name = 'IoTCategory';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'category_id',
        'state',
        'description',
        'locked_by',
        'created_by',
        'updated_by',
        'locked_at',
    ];


    protected $casts = [
        'params'    => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public static function newFactory()
    {

    }
}
