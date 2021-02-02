<?php
namespace DaydreamLab\Cms\Models\Extrafield;

use DaydreamLab\Cms\Traits\Model\WithAccess;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Models\BaseModel;

class Extrafield extends BaseModel
{
    use WithAccess,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'extrafields';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'group_id',
        'state',
        'type',
        'required',
        'value',
        'description',
        'params',
        'access',
        'ordering',
        'locked_by',
        'locked_at',
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
        'updated_at',
        'viewlevel',
        'viewlevels'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'access_title',
        'group_title',
        'creator',
        'updater',
        'locker',
    ];


    protected $casts = [
        'params'    => 'array'
    ];

    protected $with = [
        'group'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function group()
    {
        return $this->belongsTo(ExtrafieldGroup::class, 'group_id', 'id');
    }


    public function getGroupTitleAttribute()
    {
        return $this->group()->first()->title;
    }
}