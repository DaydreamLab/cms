<?php

namespace DaydreamLab\Cms\Repositories\Item\Admin;

use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Models\Item\Admin\ItemAdmin;

class ItemAdminRepository extends ItemRepository
{
    public function __construct(ItemAdmin $model)
    {
        parent::__construct($model);
    }
}