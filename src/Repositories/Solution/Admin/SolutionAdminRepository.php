<?php

namespace DaydreamLab\Cms\Repositories\Solution\Admin;

use DaydreamLab\Cms\Models\Solution\Admin\SolutionAdmin;
use DaydreamLab\Cms\Repositories\Solution\SolutionRepository;

class SolutionAdminRepository extends SolutionRepository
{
    public function __construct(SolutionAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
