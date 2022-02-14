<?php

namespace DaydreamLab\Cms\Services\IoTCategory\Front;

use DaydreamLab\Cms\Repositories\IoTCategory\Front\IoTCategoryFrontRepository;
use DaydreamLab\Cms\Services\IoTCategory\IoTCategoryService;

class IoTCategoryFrontService extends IoTCategoryService
{
    public function __construct(IoTCategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
