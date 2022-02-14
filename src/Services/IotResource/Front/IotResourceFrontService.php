<?php

namespace DaydreamLab\Cms\Services\IotResource\Front;

use DaydreamLab\Cms\Repositories\IotResource\Front\IotResourceFrontRepository;
use DaydreamLab\Cms\Services\IotResource\IotResourceService;

class IotResourceFrontService extends IotResourceService
{
    public function __construct(IotResourceFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
