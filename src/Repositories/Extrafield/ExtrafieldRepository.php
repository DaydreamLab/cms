<?php

namespace DaydreamLab\Cms\Repositories\Extrafield;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;

class ExtrafieldRepository extends BaseRepository
{
    public function __construct(Extrafield $model)
    {
        parent::__construct($model);
    }
}