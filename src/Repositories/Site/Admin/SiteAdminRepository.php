<?php

namespace DaydreamLab\Cms\Repositories\Site\Admin;

use DaydreamLab\Cms\Repositories\Site\SiteRepository;
use DaydreamLab\Cms\Models\Site\Admin\SiteAdmin;

class SiteAdminRepository extends SiteRepository
{
    public function __construct(SiteAdmin $model)
    {
        parent::__construct($model);
    }
}