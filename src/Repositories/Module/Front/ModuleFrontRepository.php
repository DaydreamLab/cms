<?php

namespace DaydreamLab\Cms\Repositories\Module\Front;

use DaydreamLab\Cms\Repositories\Module\ModuleRepository;
use DaydreamLab\Cms\Models\Module\Front\ModuleFront;

class ModuleFrontRepository extends ModuleRepository
{
    public function __construct(ModuleFront $model)
    {
        parent::__construct($model);
    }
}