<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Services\Newsletter\Admin\NewsletterAdminService;
use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class NewslettersTableSeeder extends Seeder
{
    protected $letterAdminService;

    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/item.json'), true);

        $this->letterAdminService = app(NewsletterAdminService::class);
        $this->letterAdminService->store(collect([
            'title' => '測試電子報',
            'alias' => 'testNewsletter',
            'newsletter_category_id' => 24,
            'state' => 1,
            'number' => 400
        ]));
    }


    public function migrate($data, $parent)
    {

    }
}