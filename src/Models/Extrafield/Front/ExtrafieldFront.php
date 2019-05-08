<?php
namespace DaydreamLab\Cms\Models\Extrafield\Front;

use DaydreamLab\Cms\Models\Extrafield\Extrafield;

class ExtrafieldFront extends Extrafield
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'extrafields';


    protected $hidden = [
        'id',
        'group_id',
        'state',
        'access',
        'ordering',
        'created_by',
        'updated_by',
        'created_at',
        'updated_at',
        'locked_by',
        'locked_at'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
    ];


    protected $casts = [
        'params'    => 'array'
    ];
}