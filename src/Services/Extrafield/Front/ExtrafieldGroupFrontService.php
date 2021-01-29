<?php

namespace DaydreamLab\Cms\Services\Extrafield\Front;

use DaydreamLab\Cms\Repositories\Extrafield\Front\ExtrafieldGroupFrontRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldGroupService;

class ExtrafieldGroupFrontService extends ExtrafieldGroupService
{
    protected $type = 'Front';

    public function __construct(ExtrafieldGroupFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
