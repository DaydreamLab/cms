<?php

namespace DaydreamLab\Cms\Repositories\Curation;

use DaydreamLab\Cms\Models\Curation\Curation;
use DaydreamLab\Cms\Repositories\CmsRepository;

class CurationRepository extends CmsRepository
{
    protected $modelName = 'Curation';

    public function __construct(Curation $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
