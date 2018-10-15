<?php

namespace DaydreamLab\Cms\Repositories\Module\Admin;

use DaydreamLab\Cms\Repositories\Module\ModuleRepository;
use DaydreamLab\Cms\Models\Module\Admin\ModuleAdmin;

class ModuleAdminRepository extends ModuleRepository
{
    public function __construct(ModuleAdmin $model)
    {
        parent::__construct($model);
    }
}