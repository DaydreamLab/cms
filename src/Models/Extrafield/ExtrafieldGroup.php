<?php
namespace DaydreamLab\Cms\Models\Extrafield;

use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;

class ExtrafieldGroup extends BaseModel
{
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'extrafields_groups';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'state',
        'description',
        'access',
        'created_by',
        'updated_by'
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        'created_by',
        'updated_by',
        'created_at',
        'updated_at'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'extrafields'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function extrafield()
    {
        return $this->hasMany(Extrafield::class, 'group_id','id')->where('state',1);
    }


    public function getExtrafieldsAttribute()
    {
        return $this->extrafield()->get();
    }
}