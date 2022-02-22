<?php

namespace DaydreamLab\Cms\Services\IotNews\Front;

use DaydreamLab\Cms\Repositories\IotNews\Front\IotNewsFrontRepository;
use DaydreamLab\Cms\Services\IotNews\IotNewsService;

class IotNewsFrontService extends IotNewsService
{
    public function __construct(IotNewsFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
