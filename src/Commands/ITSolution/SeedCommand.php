<?php

namespace DaydreamLab\Cms\Commands\ITSolution;

use DaydreamLab\Cms\Models\IoTCategory\IoTCategory;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\User\Models\Api\Api;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Services\Asset\Admin\AssetAdminService;
use DaydreamLab\User\Services\Asset\Admin\AssetGroupAdminService;
use Illuminate\Console\Command;


class SeedCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'solution:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'seeding solution data';


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
        $this->sitesSeeder();
        $this->apiSeeder();
        $this->assetsSeeder();
        $this->categorySeeder();
    }


    public function sitesSeeder()
    {
        $service = app(SiteAdminService::class);

        $service->store(collect([
            'title'         => 'IT Solution',
            'url'           => 'sub.'.str_replace('http://', '',str_replace('https://', '', env('APP_URL'))),
            'sitename'      => 'IT Solution',
            'sef'           => 'zh-TW',
            'metakeywords'  => '',
            'params'        => [
                'seo_title'         => '',
                'seo_keyword'       => '',
                'seo_description'   => '',
                'fb_fanpage_id'     => '',
                'fbFanpageUrl'      => '',
                'lineId'            => '',
                'liffId'            => '',
                'youtubeUrl'        => '',
                'ga'                => '',
            ],
            'access'        => 1
        ]));
    }


    public function apiSeeder()
    {
        $data = getJson(__DIR__ . '/api.json', true);
        $counter = Api::all()->count();
        foreach ($data as $apiData) {
            $apiData['ordering'] = ++$counter;
            Api::create($apiData);
        }
    }


    public function assetsSeeder()
    {
        # 處理 AssetGroup、Asset、Api 間的關係
        $data = getJson(__DIR__ . '/asset.json', true);
        foreach ($data as $inputData) {
            $inputAssets = $inputData['assets'];
            unset($inputData['assets']);
            $inputUserGroups = $inputData['userGroups'];
            unset($inputData['userGroups']);
            $userGroups = UserGroup::whereIn('title', $inputUserGroups)->get();

            $assetGroup = app(AssetGroupAdminService::class)->store(collect($inputData));
            $assetIds = [];
            foreach ($inputAssets as $inputAsset) {
                $inputApis = $inputAsset['apis'];
                unset($inputAsset['apis']);
                if (isset($inputAsset['defaultApis'])) {
                    $inputDefaultApis = $inputAsset['defaultApis'];
                    unset($inputAsset['defaultApis']);
                } else {
                    $inputDefaultApis = [];
                }

                $apis = Api::whereIn('method', $inputApis)->get();
                $asset = app(AssetAdminService::class)->store(collect($inputAsset));
                foreach ($apis as $api) {
                    $asset->apis()->attach($api->id, [
                        'asset_group_id' => $assetGroup->id,
                    ]);
                    $api->userGroups()->attach($userGroups->pluck('id'), [
                        'asset_group_id' => $assetGroup->id,
                        'asset_id' => $asset->id
                    ]);
                }

                foreach ($inputDefaultApis as $key => $rules) {
                    $api = Api::where('method', $key)->first();
                    $data = ['asset_group_id' => $assetGroup->id];
                    foreach ($rules as $rule) {
                        $data[$rule] = 1;
                    }
                    if ($api) {
                        $asset->apis()->attach($api->id, $data);
                        $api->userGroups()->attach($userGroups->pluck('id'), [
                            'asset_group_id' => $assetGroup->id,
                            'asset_id' => $asset->id
                        ]);
                    }
                }
                $asset->userGroups()->attach($userGroups->pluck('id'));
                $assetIds[] = $asset->id;
            }
            # 套用到Asset
            $assetGroup->assets()->attach($assetIds);

            # 套用到使用者群組
            $assetGroup->userGroups()->attach($userGroups->pluck('id'));
        }
    }


    public function categorySeeder()
    {
        $data = getJson(__DIR__ . '/category.json', true);
        $this->migrateCategory($data, null);
    }


    public function migrateCategory($data, $parent)
    {
        foreach ($data as $category) {
            $children = $category['children'];
            unset($category['children']);
            if ($parent) {
                $category['parent_id'] = $parent->id;
            }

            $c = IoTCategory::create($category);

            if ($parent) {
                $parent->appendNode($c);
            }

            if (count($children))
            {
                self::migrateCategory($children, $c);
            }
        }
    }
}
