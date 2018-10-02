<?php

namespace DaydreamLab\Cms\Repositories\Item\Front;

use DaydreamLab\Cms\Repositories\Item\ItemTagMapRepository;
use DaydreamLab\Cms\Models\Item\Front\ItemTagMapFront;

class ItemTagMapFrontRepository extends ItemTagMapRepository
{
    public function __construct(ItemTagMapFront $model)
    {
        parent::__construct($model);
    }
}