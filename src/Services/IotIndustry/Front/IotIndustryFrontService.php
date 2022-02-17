<?php

namespace DaydreamLab\Cms\Services\IotIndustry\Front;

use DaydreamLab\Cms\Repositories\IotIndustry\Front\IotIndustryFrontRepository;
use DaydreamLab\Cms\Services\IotIndustry\IotIndustryService;

class IotIndustryFrontService extends IotIndustryService
{
    public function __construct(IotIndustryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
