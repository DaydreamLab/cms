<?php

namespace DaydreamLab\Cms\Services\Extrafield;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldGroupRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class ExtrafieldGroupService extends BaseService
{
    protected $type = 'ExtrafieldGroup';

    public function __construct(ExtrafieldGroupRepository $repo)
    {
        parent::__construct($repo);
    }
}
