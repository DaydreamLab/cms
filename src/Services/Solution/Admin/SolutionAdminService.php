<?php

namespace DaydreamLab\Cms\Services\Solution\Admin;

use DaydreamLab\Cms\Repositories\Solution\Admin\SolutionAdminRepository;
use DaydreamLab\Cms\Services\Solution\SolutionService;

class SolutionAdminService extends SolutionService
{
    public function __construct(SolutionAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
