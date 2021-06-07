<?php

namespace DaydreamLab\Cms\Services\Cms;

use DaydreamLab\Cms\Repositories\Cms\CmsCronJobRepository;
use DaydreamLab\Cms\Services\CmsService;

class CmsCronJobService extends CmsService
{
    protected $modelName = 'CmsCronJob';

    public function __construct(CmsCronJobRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
