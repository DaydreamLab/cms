<?php

namespace DaydreamLab\Cms\Repositories\IotNews\Admin;

use DaydreamLab\Cms\Models\IotNews\Admin\IotNewsAdmin;
use DaydreamLab\Cms\Repositories\IotNews\IotNewsRepository;

class IotNewsAdminRepository extends IotNewsRepository
{
    public function __construct(IotNewsAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
