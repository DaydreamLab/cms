<?php

namespace DaydreamLab\Cms\Models\Brand;

use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;

class BrandContact extends BaseModel
{
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands_contacts';


    protected $model_type = 'parent';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'phone_code',
        'phone_number',
        'phone_extension',
        'created_by',
        'updated_by'
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


    protected $casts = [
        'locked_at' => 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        self::traitBoot();
    }

}