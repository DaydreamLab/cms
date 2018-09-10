<?php

namespace DaydreamLab\Cms\Repositories\Tag\Front;

use DaydreamLab\Cms\Repositories\Tag\TagRepository;
use DaydreamLab\Cms\Models\Tag\Front\TagFront;

class TagFrontRepository extends TagRepository
{
    public function __construct(TagFront $model)
    {
        parent::__construct($model);
    }
}