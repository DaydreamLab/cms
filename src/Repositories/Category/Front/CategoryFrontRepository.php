<?php

namespace DaydreamLab\Cms\Repositories\Category\Front;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Models\Category\Front\CategoryFront;

class CategoryFrontRepository extends CategoryRepository
{
    public function __construct(CategoryFront $model)
    {
        parent::__construct($model);
    }
}