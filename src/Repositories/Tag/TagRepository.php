<?php

namespace DaydreamLab\Cms\Repositories\Tag;

use DaydreamLab\Cms\Repositories\CmsRepository;
use DaydreamLab\Cms\Models\Tag\Tag;

class TagRepository extends CmsRepository
{
    public function __construct(Tag $model)
    {
        parent::__construct($model);
    }
}
