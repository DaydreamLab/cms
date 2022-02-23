<?php

namespace DaydreamLab\Cms\Repositories\IotEvent\Admin;

use DaydreamLab\Cms\Models\IotEvent\Admin\IotEventAdmin;
use DaydreamLab\Cms\Repositories\IotEvent\IotEventRepository;

class IotEventAdminRepository extends IotEventRepository
{
    public function __construct(IotEventAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
