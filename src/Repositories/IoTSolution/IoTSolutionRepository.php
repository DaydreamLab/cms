<?php

namespace DaydreamLab\Cms\Repositories\IoTSolution;

use DaydreamLab\Cms\Models\IoTSolution\IoTSolution;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IoTSolutionRepository extends CmsRepository
{
    protected $modelName = 'Solution';

    public function __construct(IoTSolution $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
