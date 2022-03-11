<?php

namespace DaydreamLab\Cms\Commands\ITSolution;

use DaydreamLab\Cms\Models\IotEvent\IotEvent;
use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Models\IotNews\IotNews;
use DaydreamLab\Cms\Models\IotResource\IotResource;
use DaydreamLab\Cms\Models\IotSolution\IotSolution;
use DaydreamLab\Cms\Models\IotTag\IotTag;
use DaydreamLab\Cms\Services\IotEvent\Admin\IotEventAdminService;
use DaydreamLab\Cms\Services\IotIndustry\Admin\IotIndustryAdminService;
use DaydreamLab\Cms\Services\IotNews\Admin\IotNewsAdminService;
use DaydreamLab\Cms\Services\IotResource\Admin\IotResourceAdminService;
use DaydreamLab\Cms\Services\IotSolution\Admin\IotSolutionAdminService;
use DaydreamLab\Cms\Services\IotTag\Admin\IotTagAdminService;
use Faker\Generator;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;


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
    protected $description = 'create fake data';


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

        IotEvent::query()->delete();
        IotIndustry::query()->delete();
        DB::table('iot_solutions_industries_maps')->delete();
        IotNews::query()->delete();
        DB::table('iot_news_solutions_maps')->delete();
        DB::table('iot_news_tags_maps')->delete();
        IotResource::query()->delete();
        DB::table('iot_resources_categories_maps')->delete();
        DB::table('iot_resources_industries_maps')->delete();
        DB::table('iot_resources_tags_maps')->delete();
        IotSolution::query()->delete();
        DB::table('iot_solutions_categories_maps')->delete();
        DB::table('iot_solutions_industries_maps')->delete();
        DB::table('iot_solutions_resources_maps')->delete();
        DB::table('iot_solutions_tags_maps')->delete();
        IotTag::query()->delete();

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
