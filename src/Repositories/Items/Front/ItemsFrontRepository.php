<?php

namespace DaydreamLab\Cms\Repositories\Items\Front;

use DaydreamLab\Cms\Repositories\Items\ItemsRepository;
use DaydreamLab\Cms\Models\Items\Front\ItemsFront;

class ItemsFrontRepository extends ItemsRepository
{
    public function __construct(ItemsFront $model)
    {
        parent::__construct($model);
    }
}