<?php

namespace DaydreamLab\Cms\Services\IoTCategory\Admin;

use DaydreamLab\Cms\Repositories\IoTCategory\Admin\IoTCategoryAdminRepository;
use DaydreamLab\Cms\Services\IoTCategory\IoTCategoryService;

class IoTCategoryAdminService extends IoTCategoryService
{
    public function __construct(IoTCategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
