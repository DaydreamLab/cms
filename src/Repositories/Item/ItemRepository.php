<?php

namespace DaydreamLab\Cms\Repositories\Item;

use DaydreamLab\Cms\Repositories\CmsRepository;
use DaydreamLab\Cms\Models\Item\Item;

class ItemRepository extends CmsRepository
{
    public function __construct(Item $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}