<?php

namespace DaydreamLab\Cms\Repositories\Solution\Front;

use DaydreamLab\Cms\Models\Solution\Front\SolutionFront;
use DaydreamLab\Cms\Repositories\Solution\SolutionRepository;

class SolutionFrontRepository extends SolutionRepository
{
    public function __construct(SolutionFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
