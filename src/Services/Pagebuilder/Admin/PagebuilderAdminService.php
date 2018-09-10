<?php

namespace DaydreamLab\Cms\Services\Pagebuilder\Admin;

use DaydreamLab\Cms\Repositories\Pagebuilder\Admin\PagebuilderAdminRepository;
use DaydreamLab\Cms\Services\Pagebuilder\PagebuilderService;

class PagebuilderAdminService extends PagebuilderService
{
    protected $type = 'PagebuilderAdmin';

    public function __construct(PagebuilderAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
