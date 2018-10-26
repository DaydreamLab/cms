<?php

namespace DaydreamLab\Cms\Services\Extrafield\Front;

use DaydreamLab\Cms\Repositories\Extrafield\Front\ExtrafieldFrontRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;

class ExtrafieldFrontService extends ExtrafieldService
{
    protected $type = 'ExtrafieldFront';

    public function __construct(ExtrafieldFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
