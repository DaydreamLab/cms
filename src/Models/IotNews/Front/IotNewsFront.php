<?php
namespace DaydreamLab\Cms\Models\IotNews\Front;

use DaydreamLab\Cms\Models\IotNews\IotNews;
use DaydreamLab\Cms\Models\IotSolution\Front\IotSolutionFront;
use DaydreamLab\Cms\Models\IotTag\Front\IotTagFront;

class IotNewsFront extends IotNews
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_news';

    protected $model_type = 'front';

    protected $order_by = 'publish_up';

    protected $hidden = [
        'id',
        'state',
        'access',
        'ordering',
        'featured_ordering',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at'
    ];


    public function tags()
    {
        return $this->belongsToMany(IotTagFront::class, 'iot_news_tags_maps', 'news_id', 'tag_id')
            ->where('state', '=', 1)->withTimestamps();
    }


    public function solutions()
    {
        return $this->belongsToMany(IotSolutionFront::class, 'iot_news_solutions_maps', 'news_id', 'solution_id')
            ->where('state', '=', 1)->withTimestamps();
    }
}
