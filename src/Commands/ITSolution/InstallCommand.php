<?php

namespace DaydreamLab\Cms\Commands\ITSolution;


use Illuminate\Console\Command;


class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'solution:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'install solution data';


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
        if (in_array(config('app.env'), ['production', 'staging'])) {
            return;
        }
        $this->call('dsth:install');
        $this->info('Start seeding solution');
        $this->call('solution:seed');
        $this->info('Finish seeding solution');
    }

}
