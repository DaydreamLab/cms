<?php
namespace DaydreamLab\Cms\Models\IotIndustry\Front;

use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Models\IotResource\Front\IotResourceFront;
use DaydreamLab\Cms\Models\IotSolution\Front\IotSolutionFront;

class IotIndustryFront extends IotIndustry
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_industries';

    protected $model_type = 'front';

    protected $hidden = [
        'id',
        'state',
        'access',
        'ordering',
        'params',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down'
    ];


    public function resources()
    {
        return $this->belongsToMany(IotResourceFront::class, 'iot_resources_industries_maps', 'industry_id', 'resource_id')
            ->where('state', 1);
    }


    public function solutions()
    {
        return $this->belongsToMany(IotSolutionFront::class, 'iot_solutions_industries_maps', 'industry_id', 'solution_id')
            ->where('state', 1);
    }
}
