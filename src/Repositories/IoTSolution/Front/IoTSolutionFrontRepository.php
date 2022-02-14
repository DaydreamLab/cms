<?php

namespace DaydreamLab\Cms\Repositories\IoTSolution\Front;

use DaydreamLab\Cms\Models\IoTSolution\Front\IoTSolutionFront;
use DaydreamLab\Cms\Repositories\IoTSolution\IoTSolutionRepository;

class IoTSolutionFrontRepository extends IoTSolutionRepository
{
    public function __construct(IoTSolutionFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
