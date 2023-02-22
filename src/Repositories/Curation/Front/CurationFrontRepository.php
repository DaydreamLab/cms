<?php

namespace DaydreamLab\Cms\Repositories\Curation\Front;

use DaydreamLab\Cms\Models\Curation\Front\CurationFront;
use DaydreamLab\Cms\Repositories\Curation\CurationRepository;

class CurationFrontRepository extends CurationRepository
{
    public function __construct(CurationFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
