<?php

namespace DaydreamLab\Cms\Repositories\MenuLog;

use DaydreamLab\Cms\Models\MenuLog\MenuLog;
use DaydreamLab\JJAJ\Repositories\BaseRepository;

class MenuLogRepository extends BaseRepository
{
    public function __construct(MenuLog $model)
    {
        parent::__construct($model);
    }
}
