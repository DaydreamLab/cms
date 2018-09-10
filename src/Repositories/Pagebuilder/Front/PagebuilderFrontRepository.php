<?php

namespace DaydreamLab\Cms\Repositories\Pagebuilder\Front;

use DaydreamLab\Cms\Repositories\Pagebuilder\PagebuilderRepository;
use DaydreamLab\Cms\Models\Pagebuilder\Front\PagebuilderFront;

class PagebuilderFrontRepository extends PagebuilderRepository
{
    public function __construct(PagebuilderFront $model)
    {
        parent::__construct($model);
    }
}