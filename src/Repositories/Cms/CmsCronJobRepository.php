<?php

namespace DaydreamLab\Cms\Repositories\Cms;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Cms\CmsCronJob;

class CmsCronJobRepository extends BaseRepository
{
    public function __construct(CmsCronJob $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}