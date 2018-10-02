<?php

namespace DaydreamLab\Cms\Repositories\Item\Admin;

use DaydreamLab\Cms\Repositories\Item\ItemTagMapRepository;
use DaydreamLab\Cms\Models\Item\Admin\ItemTagMapAdmin;

class ItemTagMapAdminRepository extends ItemTagMapRepository
{
    public function __construct(ItemTagMapAdmin $model)
    {
        parent::__construct($model);
    }
}