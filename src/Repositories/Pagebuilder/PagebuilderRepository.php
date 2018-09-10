<?php

namespace DaydreamLab\Cms\Repositories\Pagebuilder;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Pagebuilder\Pagebuilder;

class PagebuilderRepository extends BaseRepository
{
    public function __construct(Pagebuilder $model)
    {
        parent::__construct($model);
    }
}