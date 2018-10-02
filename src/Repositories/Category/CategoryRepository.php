<?php

namespace DaydreamLab\Cms\Repositories\Category;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Traits\NestedRepositoryTrait;

class CategoryRepository extends BaseRepository
{
    use NestedRepositoryTrait;

    public function __construct(Category $model)
    {
        parent::__construct($model);
    }
}