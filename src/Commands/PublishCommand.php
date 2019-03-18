<?php

namespace DaydreamLab\Cms\Commands;

use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class PublishCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:publish {--admin} {--front} ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish DaydreamLab cms component';

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
        if ($this->option('admin'))
        {
            $this->call('vendor:publish', [
               '--tag' => 'cms-frontend-admin'
            ]);
        }
        else
        {
            $this->call('vendor:publish', [
                '--tag' => 'cms-frontend-site'
            ]);
        }
    }
}
