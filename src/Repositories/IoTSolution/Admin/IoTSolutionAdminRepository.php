<?php

namespace DaydreamLab\Cms\Repositories\IoTSolution\Admin;

use DaydreamLab\Cms\Models\IoTSolution\Admin\IoTSolutionAdmin;
use DaydreamLab\Cms\Repositories\IoTSolution\IoTSolutionRepository;

class IoTSolutionAdminRepository extends IoTSolutionRepository
{
    public function __construct(IoTSolutionAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
