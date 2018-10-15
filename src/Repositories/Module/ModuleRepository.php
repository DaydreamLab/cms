<?php

namespace DaydreamLab\Cms\Repositories\Module;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Module\Module;

class ModuleRepository extends BaseRepository
{
    public function __construct(Module $model)
    {
        parent::__construct($model);
    }
}