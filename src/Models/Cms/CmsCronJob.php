<?php
namespace DaydreamLab\Cms\Models\Cms;

use DaydreamLab\JJAJ\Models\BaseModel;

class CmsCronJob extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'cms_cron_jobs';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'table',
        'item_id',
        'type',
        'time',
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
    ];



}