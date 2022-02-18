<?php

namespace DaydreamLab\Cms\Services\IotTag\Front;

use DaydreamLab\Cms\Repositories\IotTag\Front\IotTagFrontRepository;
use DaydreamLab\Cms\Services\IotTag\IotTagService;

class IotTagFrontService extends IotTagService
{
    public function __construct(IotTagFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
