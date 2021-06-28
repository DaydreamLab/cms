<?php

namespace DaydreamLab\cms\Services\ProductCategory\Front;

use DaydreamLab\cms\Repositories\ProductCategory\Front\ProductCategoryFrontRepository;
use DaydreamLab\cms\Services\ProductCategory\ProductCategoryService;

class ProductCategoryFrontService extends ProductCategoryService
{
    public function __construct(ProductCategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
