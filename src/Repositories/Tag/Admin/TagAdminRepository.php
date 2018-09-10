<?php

namespace DaydreamLab\Cms\Repositories\Tag\Admin;

use DaydreamLab\Cms\Repositories\Tag\TagRepository;
use DaydreamLab\Cms\Models\Tag\Admin\TagAdmin;

class TagAdminRepository extends TagRepository
{
    public function __construct(TagAdmin $model)
    {
        parent::__construct($model);
    }
}