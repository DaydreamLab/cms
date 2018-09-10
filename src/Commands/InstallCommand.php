<?php

namespace DaydreamLab\Cms\Commands;

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
    protected $description = 'Install DaydreamLab user component';


    protected $seeder_namespace = 'DaydreamLab\\Cms\\Database\\Seeds\\';


    protected $constants = [
        'category',
        'item',
        'language',
        'pagebuilder',
        'tag',
    ];


    protected $seeders = [
        'CategoriesTableSeeder',
        'LanguagesTableSeeder',
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
        $this->call('jjaj:refresh');
        $this->call('user:install');
        foreach ($this->seeders as $seeder) {
            $this->call('db:seed', [
                '--class' => $this->seeder_namespace . $seeder
            ]);
        }

        $this->deleteConstants();

        $this->call('vendor:publish', [
            '--tag' => 'cms-configs'
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
