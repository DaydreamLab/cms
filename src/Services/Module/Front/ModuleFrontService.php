<?php

namespace DaydreamLab\Cms\Services\Module\Front;

use DaydreamLab\Cms\Repositories\Module\Front\ModuleFrontRepository;
use DaydreamLab\Cms\Services\Module\ModuleService;

class ModuleFrontService extends ModuleService
{
    protected $type = 'ModuleFront';

    public function __construct(ModuleFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
