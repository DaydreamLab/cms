<?php

namespace DaydreamLab\Cms\Repositories\Item;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Item\Item;

class ItemRepository extends BaseRepository
{
    public function __construct(Item $model)
    {
        parent::__construct($model);
    }
}