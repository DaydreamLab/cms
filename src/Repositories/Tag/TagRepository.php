<?php

namespace DaydreamLab\Cms\Repositories\Tag;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Tag\Tag;

class TagRepository extends BaseRepository
{
    public function __construct(Tag $model)
    {
        parent::__construct($model);
    }
}