<?php

namespace DaydreamLab\Cms\Repositories\Tag;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\JJAJ\Traits\NestedRepositoryTrait;

class TagRepository extends BaseRepository
{
    use NestedRepositoryTrait;

    public function __construct(Tag $model)
    {
        parent::__construct($model);
    }
}