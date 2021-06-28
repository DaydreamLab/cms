<?php

namespace DaydreamLab\cms\Services\Product\Admin;

use DaydreamLab\cms\Repositories\Product\Admin\ProductAdminRepository;
use DaydreamLab\cms\Services\Product\ProductService;

class ProductAdminService extends ProductService
{
    public function __construct(ProductAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
