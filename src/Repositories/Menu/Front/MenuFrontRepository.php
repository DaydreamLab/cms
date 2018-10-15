<?php

namespace DaydreamLab\Cms\Repositories\Menu\Front;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Models\Menu\Front\MenuFront;

class MenuFrontRepository extends MenuRepository
{
    public function __construct(MenuFront $model)
    {
        parent::__construct($model);
    }
}