<?php

namespace DaydreamLab\Cms\Repositories\IotSolution\Front;

use DaydreamLab\Cms\Models\IotSolution\Front\IotSolutionFront;
use DaydreamLab\Cms\Repositories\IotSolution\IotSolutionRepository;

class IotSolutionFrontRepository extends IotSolutionRepository
{
    public function __construct(IotSolutionFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
