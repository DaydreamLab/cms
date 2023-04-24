<?php

namespace DaydreamLab\Cms\Repositories\Curation\Admin;

use DaydreamLab\Cms\Models\Curation\Admin\CurationAdmin;
use DaydreamLab\Cms\Repositories\Curation\CurationRepository;

class CurationAdminRepository extends CurationRepository
{
    public function __construct(CurationAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
