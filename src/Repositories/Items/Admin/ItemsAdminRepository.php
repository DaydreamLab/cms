<?php

namespace DaydreamLab\Cms\Repositories\Items\Admin;

use DaydreamLab\Cms\Repositories\Items\ItemsRepository;
use DaydreamLab\Cms\Models\Items\Admin\ItemsAdmin;

class ItemsAdminRepository extends ItemsRepository
{
    public function __construct(ItemsAdmin $model)
    {
        parent::__construct($model);
    }
}