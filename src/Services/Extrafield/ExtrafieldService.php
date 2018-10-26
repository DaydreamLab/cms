<?php

namespace DaydreamLab\Cms\Services\Extrafield;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class ExtrafieldService extends BaseService
{
    protected $type = 'Extrafield';

    public function __construct(ExtrafieldRepository $repo)
    {
        parent::__construct($repo);
    }
}
