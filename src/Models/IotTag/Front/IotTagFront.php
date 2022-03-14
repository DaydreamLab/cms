<?php
namespace DaydreamLab\Cms\Models\IotTag\Front;

use DaydreamLab\Cms\Models\IotNews\Front\IotNewsFront;
use DaydreamLab\Cms\Models\IotResource\Front\IotResourceFront;
use DaydreamLab\Cms\Models\IotSolution\Front\IotSolutionFront;
use DaydreamLab\Cms\Models\IotTag\IotTag;

class IotTagFront extends IotTag
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_tags';

    protected $model_type = 'front';

    protected $hidden = [
        'id',
        'state',
        'access',
        'ordering',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'pivot'
    ];


    public function news()
    {
        return $this->belongsToMany(IotNewsFront::class, 'iot_news_tags_maps', 'tag_id', 'news_id')->withTimestamps();
    }


    public function resources()
    {
        return $this->belongsToMany(IotResourceFront::class, 'iot_resources_tags_maps', 'tag_id', 'resource_id')->withTimestamps();
    }


    public function solutions()
    {
        return $this->belongsToMany(IotSolutionFront::class, 'iot_solutions_tags_maps', 'tag_id', 'solution_id')->withTimestamps();
    }
}
