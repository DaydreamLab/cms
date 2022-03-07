<?php
namespace DaydreamLab\Cms\Models\IotSolution\Front;

use DaydreamLab\Cms\Models\IotSolution\IotSolution;

class IotSolutionFront extends IotSolution
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_solutions';

    protected $model_type = 'front';

    protected $hidden = [
        'id',
        'state',
        'access',
        'locked_by',
        'locked_at',
        'pivot'
    ];
}
