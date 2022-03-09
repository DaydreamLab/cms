<?php

namespace DaydreamLab\Cms\Models\IotNews;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\Cms\Models\IotSolution\IotSolution;
use DaydreamLab\Cms\Models\IotTag\IotTag;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class IotNews extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_news';

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
        'image',
        'description',
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


    public function tags()
    {
        return $this->belongsToMany(IotTag::class, 'iot_news_tags_maps', 'news_id', 'tag_id')->withTimestamps();
    }


    public function solutions()
    {
        return $this->belongsToMany(IotSolution::class, 'iot_news_solutions_maps', 'news_id', 'solution_id')->withTimestamps();
    }
}
