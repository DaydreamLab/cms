<?php

namespace DaydreamLab\Cms\Repositories\Items;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Items\Items;

class ItemsRepository extends BaseRepository
{
    public function __construct(Items $model)
    {
        parent::__construct($model);
    }
}