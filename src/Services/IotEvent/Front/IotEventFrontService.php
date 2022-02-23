<?php

namespace DaydreamLab\Cms\Services\IotEvent\Front;

use DaydreamLab\Cms\Repositories\IotEvent\Front\IotEventFrontRepository;
use DaydreamLab\Cms\Services\IotEvent\IotEventService;

class IotEventFrontService extends IotEventService
{
    public function __construct(IotEventFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
