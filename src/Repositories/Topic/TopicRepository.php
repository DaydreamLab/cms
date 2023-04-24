<?php

namespace DaydreamLab\Cms\Repositories\Topic;

use DaydreamLab\Cms\Models\Topic\Topic;
use DaydreamLab\Cms\Repositories\CmsRepository;

class TopicRepository extends CmsRepository
{
    protected $modelName = 'Topic';

    public function __construct(Topic $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
