<?php

namespace DaydreamLab\Cms\Services\Product\Front;

use DaydreamLab\Cms\Repositories\Product\Front\ProductFrontRepository;
use DaydreamLab\Cms\Services\Product\ProductService;

class ProductFrontService extends ProductService
{
    public function __construct(ProductFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
