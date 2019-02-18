<?php

namespace DaydreamLab\Cms\Services\Cms;

use DaydreamLab\Cms\Repositories\Cms\CmsCronJobRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class CmsCronJobService extends BaseService
{
    protected $type = 'CmsCronJob';

    public function __construct(CmsCronJobRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
