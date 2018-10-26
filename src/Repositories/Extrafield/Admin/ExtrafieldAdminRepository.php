<?php

namespace DaydreamLab\Cms\Repositories\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldRepository;
use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldAdmin;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class ExtrafieldAdminRepository extends ExtrafieldRepository
{
    public function __construct(ExtrafieldAdmin $model)
    {
        parent::__construct($model);
    }
}