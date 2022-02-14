<?php

namespace DaydreamLab\Cms\Services\IoTSolution\Front;

use DaydreamLab\Cms\Repositories\IoTSolution\Front\IoTSolutionFrontRepository;
use DaydreamLab\Cms\Services\IoTSolution\IoTSolutionService;

class IoTSolutionFrontService extends IoTSolutionService
{
    public function __construct(IoTSolutionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
