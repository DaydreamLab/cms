<?php

namespace DaydreamLab\Cms\Models\Extrafield;

use DaydreamLab\JJAJ\Models\BaseModel;

class ExtrafieldValue extends BaseModel
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'extrafields_values';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'extrafield_id',
        'item_id',
        'value'
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
