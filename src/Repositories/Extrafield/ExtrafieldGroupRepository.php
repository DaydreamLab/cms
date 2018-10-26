<?php

namespace DaydreamLab\Cms\Repositories\Extrafield;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;

class ExtrafieldGroupRepository extends BaseRepository
{
    public function __construct(ExtrafieldGroup $model)
    {
        parent::__construct($model);
    }
}