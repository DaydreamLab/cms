<?php

namespace DaydreamLab\Cms\Services\IotCategory\Front;

use DaydreamLab\Cms\Repositories\IotCategory\Front\IotCategoryFrontRepository;
use DaydreamLab\Cms\Services\IotCategory\IotCategoryService;

class IotCategoryFrontService extends IotCategoryService
{
    public function __construct(IotCategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
