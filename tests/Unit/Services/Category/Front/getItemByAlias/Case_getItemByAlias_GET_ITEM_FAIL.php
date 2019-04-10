<?php

namespace DaydreamLab\Cms\Tests\Unit\Service\Category\Front\getItemByAlias;

use DaydreamLab\JJAJ\Tests\BaseTest;

class Case_getItemByAlias_GET_ITEM_FAIL extends BaseTest
{
    protected $service;

    protected $repo;

    public function __construct($service, $repo)
    {
        parent::__construct();
        $this->service      = $service;
        $this->repo         = $repo;
    }

    public function exec()
    {
        
    }
}