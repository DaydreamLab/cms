<?php

namespace DaydreamLab\Cms\Repositories\Menu\Admin;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Models\Menu\Admin\MenuAdmin;

class MenuAdminRepository extends MenuRepository
{
    public function __construct(MenuAdmin $model)
    {
        parent::__construct($model);
    }
}