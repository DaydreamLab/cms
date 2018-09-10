<?php

namespace DaydreamLab\Cms\Services\Category;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class CategoryService extends BaseService
{
    protected $type = 'Category';

    public function __construct(CategoryRepository $repo)
    {
        parent::__construct($repo);
    }
}
