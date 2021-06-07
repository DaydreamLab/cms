<?php

namespace DaydreamLab\Cms\tests\Unit\Services\Item\Cases\Admin\FeaturedOrdering;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Tests\Unit\Services\Item\Cases\Admin\ItemAdminTestBase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CaseTest extends ItemAdminTestBase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
    }


    public function testCase()
    {
        $this->testData();

        show(Item::all()->toArray());

        exit();

//        $user = User::factory()->create(['block' => 0]);
//
//        $this->repo
//            ->shouldReceive('find')
//            ->andReturn($user);
//
//        $this->repo
//            ->shouldReceive('update')
//            ->andReturn(false);
//
//        $this->service->block($input);
//        $this->assertEquals('BlockFail', $this->service->status);
    }


    protected function tearDown(): void
    {
        parent::tearDown();
    }


    public function testData()
    {
        $data = Item::create([
            'title' => '文章1',
            'alias' => 'a1',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' => 1
        ]);

        $data = Item::create([
            'title' => '文章2',
            'alias' => 'a2',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' =>2
        ]);


        $data = Item::create([
            'title' => '文章3',
            'alias' => 'a3',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' =>3
        ]);

        $data = Item::create([
            'title' => '文章4',
            'alias' => 'a4',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' =>4
        ]);
    }
}
