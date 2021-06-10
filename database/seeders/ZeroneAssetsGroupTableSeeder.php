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
        $uploadApi = Api::where('method', 'uploadMedia')->first();

        $data = getJson(__DIR__ . '/jsons/zerone.json', true);
        foreach ($data as $inputData) {
            $inputAssets = $inputData['assets'];
            unset($inputData['assets']);
            $assetGroup = app(AssetGroupAdminService::class)->store(collect($inputData));
            $assetIds = [];
            foreach ($inputAssets as $inputAsset) {
                $inputApis = $inputAsset['apis'];
                unset($inputAsset['apis']);
                $apis = Api::whereIn('method', $inputApis)->get();
                $asset = app(AssetAdminService::class)->store(collect($inputAsset));
                foreach ($apis as $api) {
                    $asset->apis()->attach($api->id, [
                        'asset_group_id' => $assetGroup->id,
                        'checked' => 1
                    ]);
                }
                $asset->apis()->attach($uploadApi->id, [
                    'asset_group_id' => $assetGroup->id,
                    'checked' => 1,
                    'hidden' => 1
                ]);
                $assetIds[] = $asset->id;
            }
        }
    }
}
