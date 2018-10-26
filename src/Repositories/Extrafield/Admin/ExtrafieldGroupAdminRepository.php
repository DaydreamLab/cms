<?php

namespace DaydreamLab\Cms\Repositories\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldGroupRepository;
use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldGroupAdmin;

class ExtrafieldGroupAdminRepository extends ExtrafieldGroupRepository
{
    public function __construct(ExtrafieldGroupAdmin $model)
    {
        parent::__construct($model);
    }
}