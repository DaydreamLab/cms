<?php

namespace DaydreamLab\Cms\Repositories\Topic\Front;

use DaydreamLab\Cms\Models\Topic\Front\TopicFront;
use DaydreamLab\Cms\Repositories\Topic\TopicRepository;

class TopicFrontRepository extends TopicRepository
{
    public function __construct(TopicFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
