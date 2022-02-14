<?php

namespace DaydreamLab\Cms\Repositories\IoTCategory\Front;

use DaydreamLab\Cms\Models\IoTCategory\Front\IoTCategoryFront;
use DaydreamLab\Cms\Repositories\IoTCategory\IoTCategoryRepository;

class IoTCategoryFrontRepository extends IoTCategoryRepository
{
    public function __construct(IoTCategoryFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
