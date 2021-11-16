<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Media\Services\File\Admin\FileAdminService;
use DaydreamLab\Media\Services\FileCategory\Admin\FileCategoryAdminService;
use Illuminate\Database\Seeder;

class FilesTableSeeder extends Seeder
{
    protected $categoryService;

    protected $fileAdminService;

    public function run()
    {
        if (config('app.env') != 'production') {
            $data = json_decode(file_get_contents(__DIR__.'/jsons/file.json'), true);
            $this->categoryService = app(FileCategoryAdminService::class);
            $this->fileAdminService = app(FileAdminService::class);

            foreach ($data as $category) {
                $category['params'] = RequestHelper::handleParams([]);
                $this->categoryService->store(collect($category));
            }
        }
    }


    public function migrate($data, $parent)
    {

    }
}
