<?php

namespace DaydreamLab\Cms\tests\Unit\Services\User\Cases\Admin\Block;

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Models\User\User;
use DaydreamLab\User\Tests\Unit\Services\User\Cases\Admin\TagAdminTestBase;
use DaydreamLab\User\Tests\Unit\Services\User\Cases\Admin\UserAdminTestBase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CaseBlockSuccess extends TagAdminTestBase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
    }


    public function testCase()
    {
        $input = collect([
            'ids'   => [1],
            'block' => 1
        ]);

//        $user = User::factory()->create(['block' => 0]);
//
//        $this->repo
//            ->shouldReceive('find')
//            ->andReturn($user);
//
//        $this->repo
//            ->shouldReceive('update')
//            ->andReturn(true);
//
//        $this->service->block($input);
//        $this->assertEquals('BlockSuccess', $this->service->status);
    }


    protected function tearDown(): void
    {
        parent::tearDown();
    }
}