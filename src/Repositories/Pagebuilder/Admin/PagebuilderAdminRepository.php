<?php

namespace DaydreamLab\Cms\Repositories\Pagebuilder\Admin;

use DaydreamLab\Cms\Repositories\Pagebuilder\PagebuilderRepository;
use DaydreamLab\Cms\Models\Pagebuilder\Admin\PagebuilderAdmin;

class PagebuilderAdminRepository extends PagebuilderRepository
{
    public function __construct(PagebuilderAdmin $model)
    {
        parent::__construct($model);
    }
}