<?php

namespace DaydreamLab\Cms\Repositories\Category;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Category\Category;

class CategoryRepository extends BaseRepository
{
    public function __construct(Category $model)
    {
        parent::__construct($model);
    }
}