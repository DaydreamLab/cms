<?php

namespace DaydreamLab\Cms\Services\Tag\Admin;

use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Tag\TagService;

class TagAdminService extends TagService
{
    protected $type = 'TagAdmin';

    public function __construct(TagAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
