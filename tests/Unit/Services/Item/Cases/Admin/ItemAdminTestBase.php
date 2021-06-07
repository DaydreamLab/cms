<?php

namespace DaydreamLab\Cms\Tests\Unit\Services\Item\Cases\Admin;

use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\JJAJ\Tests\BaseTest;
use Mockery;

class ItemAdminTestBase extends BaseTest
{
    protected $package = 'Item';

    protected $modelName = 'Item';

    protected $service;

    protected $categoryCronService;

    protected $tagService;

    protected $repo;

    protected function setUp(): void
    {
        parent::setUp();

        $this->repo = Mockery::mock(ItemAdminRepository::class);
        $this->tagService = Mockery::mock(TagAdminService::class);
        $this->categoryCronService = Mockery::mock(CategoryAdminService::class);
        $this->service = new ItemAdminService($this->repo, $this->tagService, $this->categoryCronService);
        //Artisan::call('passport:install');
    }


    protected function tearDown(): void
    {
        parent::tearDown();
    }
}
