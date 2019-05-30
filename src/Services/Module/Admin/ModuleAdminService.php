<?php

namespace DaydreamLab\Cms\Services\Module\Admin;

use DaydreamLab\Cms\Repositories\Module\Admin\ModuleAdminRepository;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ModuleAdminService extends ModuleService
{
    protected $type = 'ModuleAdmin';

    protected $search_keys = ['title', 'description'];

    public function __construct(ModuleAdminRepository $repo)
    {
        parent::__construct($repo);
    }


}
