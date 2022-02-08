<?php

namespace DaydreamLab\Cms\Repositories\Solution;

use DaydreamLab\Cms\Models\Solution\Solution;
use DaydreamLab\Cms\Repositories\CmsRepository;

class SolutionRepository extends CmsRepository
{
    protected $modelName = 'Solution';

    public function __construct(Solution $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
