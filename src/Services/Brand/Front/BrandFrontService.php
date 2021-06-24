<?php

namespace DaydreamLab\Cms\Services\Brand\Front;

use DaydreamLab\Cms\Repositories\Brand\Front\BrandFrontRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;

class BrandFrontService extends BrandService
{
    public function __construct(BrandFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
