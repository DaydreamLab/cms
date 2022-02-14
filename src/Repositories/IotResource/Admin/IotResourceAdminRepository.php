<?php

namespace DaydreamLab\Cms\Repositories\IotResource\Admin;

use DaydreamLab\Cms\Models\IotResource\Admin\IotResourceAdmin;
use DaydreamLab\Cms\Repositories\IotResource\IotResourceRepository;

class IotResourceAdminRepository extends IotResourceRepository
{
    public function __construct(IotResourceAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
