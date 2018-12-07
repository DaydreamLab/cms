<?php
namespace DaydreamLab\Cms\Models\Extrafield;

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;

class ExtrafieldGroup extends BaseModel
{
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


    public function extrafield()
    {
        return $this->hasMany(Extrafield::class, 'group_id','id')->where('state',1);
    }


    public function getExtrafieldsAttribute()
    {
        return $this->extrafield()->get();
    }
}