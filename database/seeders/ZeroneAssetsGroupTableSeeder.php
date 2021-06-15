<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\User\Models\Api\Api;
use DaydreamLab\User\Models\User\UserGroup;
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
        # 處理 AssetGroup、Asset、Api 間的關係
        $data = getJson(__DIR__ . '/jsons/zerone.json', true);
        foreach ($data as $inputData) {
            $inputAssets = $inputData['assets'];
            unset($inputData['assets']);
            $inputUserGroups = $inputData['userGroups'];
            unset($inputData['userGroups']);

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
            # 套用到Asset
            $assetGroup->assets()->attach($assetIds);

            # 套用到使用者群組
            $userGroups = UserGroup::whereIn('title', $inputUserGroups)->get();
            $assetGroup->userGroups()->attach($userGroups->pluck('id'));
        }
    }

}
