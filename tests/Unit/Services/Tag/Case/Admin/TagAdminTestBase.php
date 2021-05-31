<?php

namespace DaydreamLab\User\Tests\Unit\Services\User\Cases\Admin;

use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\JJAJ\Tests\BaseTest;
use Illuminate\Support\Facades\Artisan;
use Mockery;

class TagAdminTestBase extends BaseTest
{
    protected $package = 'Tag';

    protected $modelName = 'Tag';

    protected $service;

    protected $repo;

    protected function setUp(): void
    {
        parent::setUp();
        $this->repo = Mockery::mock(TagAdminRepository::class);

        $this->service = new TagAdminService($this->repo);
        Artisan::call('passport:install');
    }


    protected function tearDown(): void
    {
        parent::tearDown();
    }
}
