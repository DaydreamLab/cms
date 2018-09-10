<?php

namespace DaydreamLab\Cms\Services\Category\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;

class CategoryFrontService extends CategoryService
{
    protected $type = 'CategoryFront';

    public function __construct(CategoryFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
