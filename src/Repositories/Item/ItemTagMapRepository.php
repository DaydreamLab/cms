<?php

namespace DaydreamLab\Cms\Repositories\Item;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Item\ItemTagMap;

class ItemTagMapRepository extends BaseRepository
{
    public function __construct(ItemTagMap $model)
    {
        parent::__construct($model);
    }
}