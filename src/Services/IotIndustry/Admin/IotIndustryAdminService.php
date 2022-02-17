<?php

namespace DaydreamLab\Cms\Services\IotIndustry\Admin;

use DaydreamLab\Cms\Repositories\IotIndustry\Admin\IotIndustryAdminRepository;
use DaydreamLab\Cms\Services\IotIndustry\IotIndustryService;

class IotIndustryAdminService extends IotIndustryService
{
    public function __construct(IotIndustryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
