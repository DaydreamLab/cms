<?php

namespace DaydreamLab\Cms\Services\Tag;

use DaydreamLab\Cms\Repositories\Tag\TagRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class TagService extends BaseService
{
    protected $type = 'Tag';

    public function __construct(TagRepository $repo)
    {
        parent::__construct($repo);
    }
}
