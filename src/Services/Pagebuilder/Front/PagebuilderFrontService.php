<?php

namespace DaydreamLab\Cms\Services\Pagebuilder\Front;

use DaydreamLab\Cms\Repositories\Pagebuilder\Front\PagebuilderFrontRepository;
use DaydreamLab\Cms\Services\Pagebuilder\PagebuilderService;

class PagebuilderFrontService extends PagebuilderService
{
    protected $type = 'PagebuilderFront';

    public function __construct(PagebuilderFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
