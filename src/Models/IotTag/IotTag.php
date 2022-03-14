<?php

namespace DaydreamLab\Cms\Models\IotTag;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\Cms\Models\IotNews\IotNews;
use DaydreamLab\Cms\Models\IotResource\IotResource;
use DaydreamLab\Cms\Models\IotSolution\IotSolution;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class IotTag extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_tags';

    protected $model_type = 'parent';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'alias',
        'title',
        'description',
        'state',
        'access',
        'ordering',
        'params',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down'
    ];


    protected $casts = [
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


    public function news()
    {
        return $this->belongsToMany(IotNews::class, 'iot_news_tags_maps', 'tag_id', 'news_id')->withTimestamps();
    }


    public function resources()
    {
        return $this->belongsToMany(IotResource::class, 'iot_resources_tags_maps', 'tag_id', 'resource_id')->withTimestamps();
    }


    public function solutions()
    {
        return $this->belongsToMany(IotSolution::class, 'iot_solutions_tags_maps', 'tag_id', 'solution_id')->withTimestamps();
    }
}
