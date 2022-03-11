<?php

namespace DaydreamLab\Cms\Commands\ITSolution;

use DaydreamLab\Cms\Services\IotEvent\Admin\IotEventAdminService;
use DaydreamLab\Cms\Services\IotIndustry\Admin\IotIndustryAdminService;
use DaydreamLab\Cms\Services\IotNews\Admin\IotNewsAdminService;
use DaydreamLab\Cms\Services\IotResource\Admin\IotResourceAdminService;
use DaydreamLab\Cms\Services\IotSolution\Admin\IotSolutionAdminService;
use DaydreamLab\Cms\Services\IotTag\Admin\IotTagAdminService;
use Faker\Generator;
use Illuminate\Console\Command;


class FakeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'solution:fake';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'install fake data';


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

        $faker = app(Generator::class);
        for ($i=0;$i<5;$i++) {
            $ind_service = app(IotIndustryAdminService::class);
            $ind_service->store(collect([
                'title' => $faker->word,
                'description' => $faker->text,
                'publish_up' => $faker->dateTimeBetween('-5 days', 'now')
            ]));

            $tag_service = app(IotTagAdminService::class);
            $tag_service->store(collect([
                'title' => $faker->word,
                'description' => $faker->text,
                'publish_up' => $faker->dateTimeBetween('-5 days', 'now')
            ]));

            $sol_service = app(IotSolutionAdminService::class);
            $sol_service->store(collect([
                'title' => $faker->sentence,
                'introtext' => $faker->text,
                'description' => $faker->text,
                'introimage' => $faker->imageUrl,
                'images' => [
                    $faker->imageUrl
                ],
                'featured' => rand(0, 1),
                'categories' => [
                    ['id' => rand(6, 11)]
                ],
                'industries' => [
                    ['id' => rand(1, 5)]
                ],
                'tags' => [
                    ['id' => rand(1, 5)]
                ],
                'resources' => [
                    ['id' => rand(1, 5)]
                ],
                'publish_up' => $faker->dateTimeBetween('-5 days', 'now')
            ]));

            $res_service = app(IotResourceAdminService::class);
            $res_service->store(collect([
                'title' => $faker->sentence,
                'introtext' => $faker->text,
                'description' => $faker->text,
                'introimage' => $faker->imageUrl,
                'images' => [
                    $faker->imageUrl
                ],
                'categories' => [
                    ['id' => rand(6, 11)]
                ],
                'industries' => [
                    ['id' => rand(1, 5)]
                ],
                'tags' => [
                    ['id' => rand(1, 5)]
                ],
                'publish_up' => $faker->dateTimeBetween('-5 days', 'now')
            ]));

            $news_service = app(IotNewsAdminService::class);
            $news_service->store(collect([
                'title' => $faker->sentence,
                'introtext' => $faker->text,
                'description' => $faker->text,
                'introimage' => $faker->imageUrl,
                'solutions' => [
                    ['id' => rand(1, 5)]
                ],
                'tags' => [
                    ['id' => rand(1, 5)]
                ],
                'publish_up' => $faker->dateTimeBetween('-5 days', 'now')
            ]));

            $event_service = app(IotEventAdminService::class);
            $event_service->store(collect([
                'title' => $faker->sentence,
                'introtext' => $faker->text,
                'description' => $faker->text,
                'introimage' => $faker->imageUrl,
                'start_date' => $faker->dateTimeBetween('now', '+5 days'),
                'end_date' => $faker->dateTimeBetween('+6 days', '+10 days'),
                'publish_up' => $faker->dateTimeBetween('-5 days', 'now')
            ]));
        }
    }

}
