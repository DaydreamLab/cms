<?php
namespace DaydreamLab\Cms\Models\Module;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;

class Module extends BaseModel
{
    use WithAccess, WithLanguage, WithCategory,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'modules';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'category_id',
        'state',
        'description',
        'access',
        'language',
        'params',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'publish_up',
        'publish_down'
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        'viewlevel',
        'viewlevels'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'category_title',
        'access_title',
        'language_title'
    ];


    protected $casts = [
        'params'        => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();
    }

}