<?php

namespace DaydreamLab\Cms\Repositories\Item\Front;

use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Models\Item\Front\ItemFront;

class ItemFrontRepository extends ItemRepository
{
    public function __construct(ItemFront $model)
    {
        parent::__construct($model);
    }
}