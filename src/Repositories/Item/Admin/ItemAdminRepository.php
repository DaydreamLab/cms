<?php

namespace DaydreamLab\Cms\Repositories\Item\Admin;

use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Models\Item\Admin\ItemAdmin;
use DaydreamLab\Cms\Traits\Repository\WithFeatured;

class ItemAdminRepository extends ItemRepository
{
    use WithFeatured;

    public function __construct(ItemAdmin $model)
    {
        parent::__construct($model);
    }

}