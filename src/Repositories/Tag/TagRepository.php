<?php

namespace DaydreamLab\Cms\Repositories\Tag;

use DaydreamLab\Cms\Repositories\CmsRepository;
use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\JJAJ\Traits\NestedRepositoryTrait;

class TagRepository extends CmsRepository
{
    use NestedRepositoryTrait;

    public function __construct(Tag $model)
    {
        parent::__construct($model);
    }
}
