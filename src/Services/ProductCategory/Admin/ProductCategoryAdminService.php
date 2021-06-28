<?php

namespace DaydreamLab\cms\Services\ProductCategory\Admin;

use DaydreamLab\cms\Repositories\ProductCategory\Admin\ProductCategoryAdminRepository;
use DaydreamLab\cms\Services\ProductCategory\ProductCategoryService;

class ProductCategoryAdminService extends ProductCategoryService
{
    public function __construct(ProductCategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
