<?php

namespace DaydreamLab\Cms\Services\Module;

use DaydreamLab\Cms\Repositories\Module\ModuleRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class ModuleService extends BaseService
{
    protected $type = 'Module';

    public function __construct(ModuleRepository $repo)
    {
        parent::__construct($repo);
    }
}
