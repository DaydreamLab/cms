<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Models\Asset\Asset;
use DaydreamLab\User\Models\Asset\AssetApi;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Models\User\UserGroupApiMap;
use DaydreamLab\User\Models\User\UserGroupAssetMap;
use DaydreamLab\User\Repositories\Asset\AssetRepository;
use DaydreamLab\User\Services\Asset\AssetService;
use Illuminate\Database\Seeder;

class AssetsTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/asset.json'), true);

        $this->migrate($data, Asset::find(1));

        $service    = new AssetService(new AssetRepository(new Asset()));

        $combine_path = function ($parent_id, $full_path) use (&$combine_path, $service) {
            if($parent_id == 1) {
                return $full_path;
            }
            else {
                $parent = $service->find($parent_id);
                $full_path = $parent->path . $full_path;
                return $combine_path($parent->parent_id, $full_path);
            }
        };

        $assets     = $service->search(Helper::collect(['paginate' => false, 'without_root' => 1]));
        $assets->forget('pagination');
        foreach ($assets as $asset) {
            $full_path = $asset->path;
            $asset->full_path = $combine_path($asset->parent_id, $full_path);
            $asset->save();
        }
    }

    public function migrate($data, $parent)
    {
        $super_user = UserGroup::where('title','Super User')->first();
        $administrator = UserGroup::where('title','Administrator')->first();


        foreach ($data as $item)
        {
            $apis       = $item['apis'];
            $children   = $item['children'];
            unset($item['children']);
            unset($item['apis']);

            $parent = Asset::find($parent->id);
            $item['ordering'] = $parent->children->count()+1;
            $asset = Asset::create($item);
            //UserGroupAssetMap::create([
            UserGroupAssetMap::create([
                'group_id'   => $super_user->id,
                'asset_id'  => $asset->id,
            ]);
            UserGroupAssetMap::create([
                'group_id'   => $administrator->id,
                'asset_id'  => $asset->id,
            ]);

            if ($parent)
            {
                $parent->appendNode($asset);
            }

            $api_ids = [];
            foreach ($apis as $api)
            {
                $api['asset_id'] = $asset->id;
                $asset_api = AssetApi::create($api);
                $api_ids[] = $asset_api->id;
                UserGroupApiMap::create([
                    'group_id'   => $super_user->id,
                    'api_id'    => $asset_api->id,
                ]);

                UserGroupApiMap::create([
                    'group_id'   => $administrator->id,
                    'api_id'    => $asset_api->id,
                ]);
            }

            if (count($children))
            {
                self::migrate($children, $asset);
            }
        }

    }
}
