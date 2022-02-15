<?php

namespace DaydreamLab\Cms\Repositories\IotCategory\Admin;

use DaydreamLab\Cms\Models\IotCategory\Admin\IotCategoryAdmin;
use DaydreamLab\Cms\Repositories\IotCategory\IotCategoryRepository;

class IotCategoryAdminRepository extends IotCategoryRepository
{
    public function __construct(IotCategoryAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
