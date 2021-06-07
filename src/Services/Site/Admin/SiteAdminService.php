<?php

namespace DaydreamLab\Cms\Services\Site\Admin;

use DaydreamLab\Cms\Repositories\Site\Admin\SiteAdminRepository;
use DaydreamLab\Cms\Services\Site\SiteService;

class SiteAdminService extends SiteService
{
    public function __construct(SiteAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
