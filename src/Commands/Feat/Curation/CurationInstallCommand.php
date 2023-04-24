<?php

namespace DaydreamLab\Cms\Commands\Feat\Curation;

use DaydreamLab\User\Models\Api\Api;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Services\Asset\Admin\AssetAdminService;
use DaydreamLab\User\Services\Asset\Admin\AssetGroupAdminService;
use Illuminate\Console\Command;

class CurationInstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:feat-curation-install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('migrate');
        $this->apiSeeder();
        $this->assetsSeeder();
    }


    public function apiSeeder()
    {
        $this->info('加入 api 中...');
        $data = getJson(__DIR__ . '/jsons/api.json', true);
        $counter = Api::all()->count();
        foreach ($data as $apiData) {
            $apiData['ordering'] = ++$counter;
            Api::create($apiData);
        }
        $this->info('加入 api 完成');
    }


    public function assetsSeeder()
    {
        $this->info('加入 asset 中...');
        # 處理 AssetGroup、Asset、Api 間的關係
        $data = getJson(__DIR__ . '/jsons/asset.json', true);
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
        $this->info('加入 asset 完成');
    }
}
