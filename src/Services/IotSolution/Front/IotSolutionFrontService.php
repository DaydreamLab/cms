<?php

namespace DaydreamLab\Cms\Services\IotSolution\Front;

use DaydreamLab\Cms\Repositories\IotSolution\Front\IotSolutionFrontRepository;
use DaydreamLab\Cms\Services\IotSolution\IotSolutionService;

class IotSolutionFrontService extends IotSolutionService
{
    public function __construct(IotSolutionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
