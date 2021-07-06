<?php

namespace DaydreamLab\Cms\Services\ProductCategory\Front;

use DaydreamLab\Cms\Repositories\ProductCategory\Front\ProductCategoryFrontRepository;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;

class ProductCategoryFrontService extends ProductCategoryService
{
    public function __construct(ProductCategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
