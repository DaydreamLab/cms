<?php

namespace DaydreamLab\Cms\Repositories\Item\Front;

use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Models\Item\Front\ItemFront;
use DaydreamLab\JJAJ\Helpers\Helper;

class ItemFrontRepository extends ItemRepository
{
    public function __construct(ItemFront $model)
    {
        parent::__construct($model);
    }


    public function getSelectedItems($ids)
    {
        return $this->model->whereIn('id', $ids)->get()->toArray();
    }
}