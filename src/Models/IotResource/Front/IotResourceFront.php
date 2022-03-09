<?php
namespace DaydreamLab\Cms\Models\IotResource\Front;

use DaydreamLab\Cms\Models\IotCategory\Front\IotCategoryFront;
use DaydreamLab\Cms\Models\IotIndustry\Front\IotIndustryFront;
use DaydreamLab\Cms\Models\IotResource\IotResource;
use DaydreamLab\Cms\Models\IotSolution\Front\IotSolutionFront;
use DaydreamLab\Cms\Models\IotTag\Front\IotTagFront;

class IotResourceFront extends IotResource
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_resources';

    protected $model_type = 'front';

    protected $order_by = 'publish_up';

    protected $hidden = [
        'id',
        'state',
        'access',
        'locked_by',
        'locked_at',
        'pivot'
    ];


    public function categories()
    {
        return $this->belongsToMany(IotCategoryFront::class, 'iot_resources_categories_maps', 'resource_id', 'category_id')
            ->where('state', '=', 1)->withTimestamps();
    }


    public function industries()
    {
        return $this->belongsToMany(IotIndustryFront::class, 'iot_resources_industries_maps', 'resource_id', 'industry_id')
            ->where('state', '=', 1)->withTimestamps();
    }


    public function tags()
    {
        return $this->belongsToMany(IotTagFront::class, 'iot_resources_tags_maps', 'resource_id', 'tag_id')
            ->where('state', '=', 1)->withTimestamps();
    }


    public function solutions()
    {
        return $this->belongsToMany(IotSolutionFront::class, 'iot_solutions_resources_maps', 'resource_id', 'solution_id')
            ->where('state', '=', 1)->withTimestamps();
    }
}
