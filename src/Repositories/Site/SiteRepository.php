<?php

namespace DaydreamLab\Cms\Repositories\Site;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Site\Site;

class SiteRepository extends BaseRepository
{
    public function __construct(Site $model)
    {
        parent::__construct($model);
    }
}