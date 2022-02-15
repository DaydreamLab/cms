<?php

namespace DaydreamLab\Cms\Repositories\IotSolution;

use DaydreamLab\Cms\Models\IotSolution\IotSolution;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotSolutionRepository extends CmsRepository
{
    protected $modelName = 'Solution';

    public function __construct(IotSolution $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
