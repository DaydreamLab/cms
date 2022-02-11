<?php

namespace DaydreamLab\Cms\Repositories\Resource;

use DaydreamLab\Cms\Models\Resource\Resource;
use DaydreamLab\Cms\Repositories\CmsRepository;

class ResourceRepository extends CmsRepository
{
    protected $modelName = 'Resource';

    public function __construct(Resource $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
