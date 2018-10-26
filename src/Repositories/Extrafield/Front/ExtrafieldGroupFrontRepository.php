<?php

namespace DaydreamLab\Cms\Repositories\Extrafield\Front;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldGroupRepository;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldGroupFront;

class ExtrafieldGroupFrontRepository extends ExtrafieldGroupRepository
{
    public function __construct(ExtrafieldGroupFront $model)
    {
        parent::__construct($model);
    }
}