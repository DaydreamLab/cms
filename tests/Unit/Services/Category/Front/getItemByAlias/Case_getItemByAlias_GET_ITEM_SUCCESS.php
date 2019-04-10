<?php

namespace DaydreamLab\Cms\Tests\Unit\Service\Category\Front\getItemByAlias;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\JJAJ\Tests\BaseTest;

class Case_getItemByAlias_GET_ITEM_SUCCESS extends BaseTest
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
        //category data 
        $category = factory(CategoryFront::class)->make();
        //search結果第一次設定為null, 第二次設定為取得一個category model
        $this->repo->shouldReceive('search')->andReturn($category);

        $fake_input = collect([]);
        //status code 來自 service 本體
        $this->service->getItemByAlias($fake_input);
        $this->assertEquals('CATEGORY_FRONT_GET_ITEM_SUCCESS', $this->service->status);
    }
}