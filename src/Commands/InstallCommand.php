<?php

namespace DaydreamLab\Cms\Commands;

use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install DaydreamLab cms component';


    protected $seeder_namespace = 'DaydreamLab\\Cms\\Database\\Seeds\\';


    protected $constants = [
        'category',
        'cron',
        'extrafield',
        'item',
        'language',
        'menu',
        'module',
        'option',
        'pagebuilder',
        'setting',
        'site',
        'tag',
    ];


    protected $seeders = [
        'AssetsTableSeeder',
        'ItemsTableSeeder',
        'SitesTableSeeder',
        'LanguagesTableSeeder',
        'MenusTableSeeder',
        'ModulesTableSeeder',
        'TagsTableSeeder',
        'CategoriesTableSeeder',
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
        $this->call('user:install');
        $this->call('media:install');
        $this->call('observer:install');

        foreach ($this->seeders as $seeder) {
            $this->call('db:seed', [
                '--class' => $this->seeder_namespace . $seeder
            ]);
        }

        $this->deleteConstants();

        $this->call('vendor:publish', [
            '--tag' => 'cms-configs'
        ]);

        $this->call('vendor:publish', [
            '--tag' => 'cms-frontend-site'
        ]);

        $this->call('vendor:publish', [
            '--tag'     => 'cms-frontend-admin',
            '--force'   => 1
        ]);

        $this->call('vendor:publish', [
            '--provider' => 'Fedeisas\LaravelMailCssInliner\LaravelMailCssInlinerServiceProvider'
        ]);

    }

    public function deleteConstants()
    {
        $constants_path     = 'config/constants/';
        foreach ($this->constants as $constant) {
            File::delete($constants_path . $constant . '.php');
        }
    }

}
