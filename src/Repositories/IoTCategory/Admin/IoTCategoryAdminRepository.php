<?php

namespace DaydreamLab\Cms\Repositories\IoTCategory\Admin;

use DaydreamLab\Cms\Models\IoTCategory\Admin\IoTCategoryAdmin;
use DaydreamLab\Cms\Repositories\IoTCategory\IoTCategoryRepository;

class IoTCategoryAdminRepository extends IoTCategoryRepository
{
    public function __construct(IoTCategoryAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
