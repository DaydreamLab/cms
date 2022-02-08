<?php

namespace DaydreamLab\Cms\Services\Solution\Front;

use DaydreamLab\Cms\Repositories\Solution\Front\SolutionFrontRepository;
use DaydreamLab\Cms\Services\Solution\SolutionService;

class SolutionFrontService extends SolutionService
{
    public function __construct(SolutionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
