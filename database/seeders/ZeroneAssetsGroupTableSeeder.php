<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\User\Models\Api\Api;
use DaydreamLab\User\Services\Asset\Admin\AssetAdminService;
use DaydreamLab\User\Services\Asset\Admin\AssetGroupAdminService;
use Illuminate\Database\Seeder;

class ZeroneAssetsGroupTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = getJson(__DIR__ . '/jsons/zerone.json', true);
        foreach ($data as $inputData) {
            $inputAssets = $inputData['assets'];
            unset($inputData['assets']);
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
                }

                foreach ($inputDefaultApis as $key => $rules) {
                    $api = Api::where('method', $key)->first();
                    $data = ['asset_group_id' => $assetGroup->id];
                    foreach ($rules as $rule) {
                        $data[$rule] = 1;
                    }
                    if ($api) {
                        $asset->apis()->attach($api->id, $data);
                    }
                }

                $assetIds[] = $asset->id;
            }
        }
    }
}
