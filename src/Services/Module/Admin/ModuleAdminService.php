<?php

namespace DaydreamLab\Cms\Services\Module\Admin;

use DaydreamLab\Cms\Repositories\Module\Admin\ModuleAdminRepository;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\JJAJ\Traits\LoggedIn;

class ModuleAdminService extends ModuleService
{
    use LoggedIn;

    protected $modelType = 'Admin';

    protected $search_keys = ['title', 'description'];

    public function __construct(ModuleAdminRepository $repo)
    {
        parent::__construct($repo);
    }


}
