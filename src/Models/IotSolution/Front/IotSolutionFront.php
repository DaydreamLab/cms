<?php
namespace DaydreamLab\Cms\Models\IotSolution\Front;

use DaydreamLab\Cms\Models\IotCategory\Front\IotCategoryFront;
use DaydreamLab\Cms\Models\IotIndustry\Front\IotIndustryFront;
use DaydreamLab\Cms\Models\IotResource\Front\IotResourceFront;
use DaydreamLab\Cms\Models\IotSolution\IotSolution;
use DaydreamLab\Cms\Models\IotTag\Front\IotTagFront;

class IotSolutionFront extends IotSolution
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_solutions';

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
        return $this->belongsToMany(IotCategoryFront::class, 'iot_solutions_categories_maps', 'solution_id', 'category_id')->withTimestamps();
    }


    public function industries()
    {
        return $this->belongsToMany(IotIndustryFront::class, 'iot_solutions_industries_maps', 'solution_id', 'industry_id')->withTimestamps();
    }


    public function tags()
    {
        return $this->belongsToMany(IotTagFront::class, 'iot_solutions_tags_maps', 'solution_id', 'tag_id')->withTimestamps();
    }


    public function resources()
    {
        return $this->belongsToMany(IotResourceFront::class, 'iot_solutions_resources_maps', 'solution_id', 'resource_id')->withTimestamps();
    }


    public function getRelatedSolutionsAttribute()
    {
        $categories = $this->categories()->get();
        $related_solutions = $categories->map(function ($c) {
            $category_solutions = $c->solutions;
            return $category_solutions;
        })->flatten()->unique('id')->values();
        return $related_solutions;
    }
}
