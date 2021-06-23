<?php

namespace DaydreamLab\Cms\Commands;

use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Models\Asset\Asset;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:install {--publish}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install DaydreamLab cms component';


    protected $seeder_namespace = 'DaydreamLab\\Cms\\Database\\Seeders\\';


    protected $constants = [
    ];


    protected $seeders = [
        'ApisTableSeeder',
        'AssetsTableSeeder',
        'CategoriesTableSeeder',
        'ItemsTableSeeder',
        'SitesTableSeeder',
        'LanguagesTableSeeder',
        'MenusTableSeeder',
        'ModulesTableSeeder',
        'TagsTableSeeder',
        'ZeroneAssetsGroupTableSeeder',
    ];


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
//        Tag::truncate();
//        $this->call('db:seed', [
//            '--class' => $this->seeder_namespace . 'TagsTableSeeder'
//        ]);
//        exit();

        $this->call('user:install');

        foreach ($this->seeders as $seeder) {
            $this->info('Start seeding '. $seeder);
            $this->call('db:seed', [
                '--class' => $this->seeder_namespace . $seeder
            ]);
        }

        if ($this->option('publish')) {
            $this->call('cms:publish');
        }

        $this->call('vendor:publish', [
            '--tag' => 'cms-configs'
        ]);

        $this->call('vendor:publish', [
            '--provider' => 'Fedeisas\LaravelMailCssInliner\LaravelMailCssInlinerServiceProvider'
        ]);
    }


    public function deleteResources()
    {
        File::deleteDirectory('Resources/js');
        File::deleteDirectory('Resources/assets');
        File::deleteDirectory('Resources/views');
    }
}
