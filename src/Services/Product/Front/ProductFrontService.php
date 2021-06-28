<?php

namespace DaydreamLab\cms\Services\Product\Front;

use DaydreamLab\cms\Repositories\Product\Front\ProductFrontRepository;
use DaydreamLab\cms\Services\Product\ProductService;

class ProductFrontService extends ProductService
{
    public function __construct(ProductFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
