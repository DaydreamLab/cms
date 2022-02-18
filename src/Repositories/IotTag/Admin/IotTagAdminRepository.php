<?php

namespace DaydreamLab\Cms\Repositories\IotTag\Admin;

use DaydreamLab\Cms\Models\IotTag\Admin\IotTagAdmin;
use DaydreamLab\Cms\Repositories\IotTag\IotTagRepository;

class IotTagAdminRepository extends IotTagRepository
{
    public function __construct(IotTagAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
