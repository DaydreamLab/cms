<?php

namespace DaydreamLab\Cms\Repositories\Menu;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Menu\Menu;
use DaydreamLab\JJAJ\Traits\NestedRepositoryTrait;

class MenuRepository extends BaseRepository
{
    use NestedRepositoryTrait;

    public function __construct(Menu $model)
    {
        parent::__construct($model);
    }
}