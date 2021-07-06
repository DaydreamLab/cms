<?php

namespace DaydreamLab\Cms\Services\Product\Admin;

use DaydreamLab\Cms\Repositories\Product\Admin\ProductAdminRepository;
use DaydreamLab\Cms\Services\Product\ProductService;

class ProductAdminService extends ProductService
{
    public function __construct(ProductAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
