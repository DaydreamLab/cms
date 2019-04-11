<?php

namespace DaydreamLab\Cms\Tests\Unit\Service\Category\Front;

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Tests\BaseTest;
use Faker\Generator;
use Illuminate\Database\Eloquent\Factory;
use Mockery;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;

//使用一個模擬passport登入的trait
use DaydreamLab\JJAJ\Traits\PassportActingAsTrait;
//要使用factory產生假使用者
use DaydreamLab\User\Models\User\User;

//use DaydreamLab\Cms\Tests\Unit\Service\Category\Front\getItemByAlias\Case_getItemByAlias_GET_ITEM_SUCCESS;
//use DaydreamLab\Cms\Tests\Unit\Service\Category\Front\getItemByAlias\Case_getItemByAlias_GET_ITEM_FAIL;

class CategoryServiceFrontTest extends BaseTest
{
    use PassportActingAsTrait;

    protected $service;
    protected $repo;

    protected function setUp():void
    {
        parent::setUp();
        
        // Override Model Factory Path
        $this->app->singleton(Factory::class, function ($app) {
            $faker = $app->make(Generator::class);
            return Factory::construct($faker, dirname(dirname(dirname(dirname(dirname(__DIR__)))))."/src/database/factories"  );
        });
        
        //$this->passportActingAs(factory(User::class)->make());

        $this->repo         = Mockery::mock(CategoryFrontRepository::class);
        $this->service      = new CategoryFrontService($this->repo);
    }

    protected function tearDown():void
    {
        parent::tearDown();
    }

    public function testGetItemByAlias()
    {

        $this->setUp();
        //(new Case_getItemByAlias_GET_ITEM_SUCCESS($this->service, $this->repo))->exec();

        //category data
        $category = factory(CategoryFront::class)->make();
        $this->passportActingAs(factory(User::class)->make());
        //search結果第一次設定為null, 第二次設定為取得一個category model
        
        $this->repo->shouldReceive('getModel')->andReturn($category);
        $this->repo->shouldReceive('search')->andReturn(collect($category));
        //$this->repo->shouldReceive('search')->andReturn($category);
        //$this->repo->shouldReceive('update')->andReturn(1);

        $fake_input = collect(['alias'=>'test123']);
        //status code 來自 service 本體
        $this->service->getItemByAlias($fake_input);
        //$this->assertEquals('CATEGORY_FRONT_GET_ITEM_SUCCESS', $this->service->status);

        $this->tearDown();
    }
}