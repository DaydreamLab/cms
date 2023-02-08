<?php

namespace DaydreamLab\Cms\Models\MenuLog;

use DaydreamLab\JJAJ\Models\BaseModel;

class MenuLog extends BaseModel
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menu_logs';


    protected $order_by = 'id';

    protected $order = 'desc';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'menuId',
        'refererId',
        'leaveAt',
        'time',
        'userId'
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'creator',
        'updater',
    ];


    protected $casts = [
    ];
}
