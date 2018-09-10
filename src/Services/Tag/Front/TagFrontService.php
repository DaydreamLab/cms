<?php

namespace DaydreamLab\Cms\Services\Tag\Front;

use DaydreamLab\Cms\Repositories\Tag\Front\TagFrontRepository;
use DaydreamLab\Cms\Services\Tag\TagService;

class TagFrontService extends TagService
{
    protected $type = 'TagFront';

    public function __construct(TagFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
