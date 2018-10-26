<?php

namespace DaydreamLab\Cms\Repositories\Extrafield\Front;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldRepository;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;

class ExtrafieldFrontRepository extends ExtrafieldRepository
{
    public function __construct(ExtrafieldFront $model)
    {
        parent::__construct($model);
    }
}