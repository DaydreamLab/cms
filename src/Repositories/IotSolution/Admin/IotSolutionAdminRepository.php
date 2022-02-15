<?php

namespace DaydreamLab\Cms\Repositories\IotSolution\Admin;

use DaydreamLab\Cms\Models\IotSolution\Admin\IotSolutionAdmin;
use DaydreamLab\Cms\Repositories\IotSolution\IotSolutionRepository;

class IotSolutionAdminRepository extends IotSolutionRepository
{
    public function __construct(IotSolutionAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
