<?php

namespace DaydreamLab\Cms\Models\IotSolution;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\Cms\Models\IotCategory\IotCategory;
use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Models\IotResource\IotResource;
use DaydreamLab\Cms\Models\IotTag\IotTag;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class IotSolution extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_solutions';

    protected $model_type = 'parent';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'alias',
        'title',
        'introimage',
        'introtext',
        'images',
        'description',
        'contacts',
        'state',
        'access',
        'ordering',
        'featured',
        'featured_ordering',
        'params',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down',
        'created_by',
        'updated_by'
    ];

    protected $hidden = [
        'created_by',
        'updated_by'
    ];


    protected $casts = [
        'images'        => 'array',
        'contacts'      => 'array',
        'params'        => 'array',
        'locked_at'     => 'datetime:Y-m-d H:i:s',
        'publish_up'    => 'datetime:Y-m-d H:i:s',
        'publish_down'  => 'datetime:Y-m-d H:i:s'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public static function newFactory()
    {
    }


    public function categories()
    {
        return $this->belongsToMany(IotCategory::class, 'iot_solutions_categories_maps', 'solution_id', 'category_id')->withTimestamps();
    }


    public function industries()
    {
        return $this->belongsToMany(IotIndustry::class, 'iot_solutions_industries_maps', 'solution_id', 'industry_id')->withTimestamps();
    }


    public function tags()
    {
        return $this->belongsToMany(IotTag::class, 'iot_solutions_tags_maps', 'solution_id', 'tag_id')->withTimestamps();
    }


    public function resources()
    {
        return $this->belongsToMany(IotResource::class, 'iot_solutions_resources_maps', 'solution_id', 'resource_id')->withTimestamps();
    }
}
