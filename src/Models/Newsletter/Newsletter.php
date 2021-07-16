<?php

namespace DaydreamLab\Cms\Models\Newsletter;

use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\User\Models\User\UserGroup;

class Newsletter extends BaseModel
{
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'newsletters';


    protected $model_type = 'parent';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'newsletter_category_id',
        'title',
        'alias',
        'image',
        'number',
        'description',
        'url',
        'display_topic',
        'information',
        'params',
        'state',
        'ordering',
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
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
    ];


    protected $casts = [
        'params' => 'array',
        'locked_at' => 'datetime:Y-m-d H:i:s',
        'publish_up' => 'datetime:Y-m-d H:i:s',
        'publish_down' => 'datetime:Y-m-d H:i:s'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function userGroups()
    {
        return $this->belongsToMany(UserGroup::class, 'newsletter_category_user_group_maps', 'category_id', 'group_id')
            ->withTimestamps();
    }
}