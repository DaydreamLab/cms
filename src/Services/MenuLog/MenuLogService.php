<?php

namespace DaydreamLab\Cms\Services\MenuLog;

use DaydreamLab\Cms\Repositories\MenuLog\MenuLogRepository;
use DaydreamLab\Cms\Services\CmsService;

class MenuLogService extends CmsService
{
    protected $modelName = 'MenuLog';

    public function __construct(MenuLogRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }

}
