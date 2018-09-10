<?php

namespace DaydreamLab\Cms\Services\Pagebuilder;

use DaydreamLab\Cms\Repositories\Pagebuilder\PagebuilderRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class PagebuilderService extends BaseService
{
    protected $type = 'Pagebuilder';

    public function __construct(PagebuilderRepository $repo)
    {
        parent::__construct($repo);
    }
}
