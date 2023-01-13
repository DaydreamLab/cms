<?php

namespace DaydreamLab\Cms\Commands\StaticPage;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Media\Services\FileCategory\Admin\FileCategoryAdminService;
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
    protected $signature = 'static:seed {--asset}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'seeding static page data';


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
        $this->apiSeeder();
        $this->seedStaticPage();
        if ($this->option('asset')) {
            $this->assetsSeeder('recruit-asset.json');
        }
        $this->seedRecruitPage();
    }


    public function apiSeeder()
    {
        $data = [
            [
                'name' => '取得靜態頁面',
                'method' => 'getStatic',
                'url' => 'api/admin/static/{alias}',
                'created_by' => 1
            ],
            [
                'name' => '編輯靜態頁面',
                'method' => 'editStatic',
                'url' => 'api/admin/static/{alias}/store',
                'created_by' => 1
            ]
        ];

        $counter = Api::all()->count();
        foreach ($data as $apiData) {
            $apiData['ordering'] = ++$counter;
            Api::create($apiData);
        }
    }


    public function assetsSeeder($file_name)
    {
        # 處理 AssetGroup、Asset、Api 間的關係
        $data = getJson(__DIR__ . '/' . $file_name, true);
        foreach ($data as $inputData) {
            $inputAssets = $inputData['assets'];
            unset($inputData['assets']);
            $inputUserGroups = $inputData['userGroups'];
            unset($inputData['userGroups']);
            $userGroups = UserGroup::whereIn('title', $inputUserGroups)->get();

            $assetGroup = app(AssetGroupAdminService::class)->findBy('title', '=', $inputData['title'])->first();
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

    public function seedStaticPage()
    {
        $this->assetsSeeder('static-asset.json');
        $fcas = app(FileCategoryAdminService::class);
        $fcas->store(collect([
            "title" => "關於零壹",
            "state" => 1,
            "contentType" => "file",
            "extension" => "about01"
        ]));
        $fcas->store(collect([
            "title" => "投資人專區",
            "state" => 1,
            "contentType" => "file",
            "extension" => "investor"
        ]));
        $data = getJson(__DIR__ . '/static-field.json', true);
        $category_service = app(CategoryAdminService::class);
        $about_cat = $category_service->store(collect([
            'title' => '關於零壹',
            'alias' => 'about01',
            'parent_id' => 1,
            'state'  => 1,
            'content_type' => 'about',
            'description' => '',
            'access'   => 1
        ]));
        Item::create([
            'title' => '關於零壹',
            'alias' => 'about01',
            'category_id' => $about_cat->id,
            'description' => json_encode($data['about01']),
            'access' => 1,
            'created_by' => 1
        ]);
        $invest_cat = $category_service->store(collect([
            'title' => '投資人專區',
            'alias' => 'investor',
            'parent_id' => 1,
            'state'  => 1,
            'content_type' => 'investor',
            'description' => '',
            'access'   => 1
        ]));
        Item::create([
            'title' => '投資人專區',
            'alias' => 'investor',
            'category_id' => $invest_cat->id,
            'description' => json_encode($data['investor']),
            'access' => 1,
            'created_by' => 1
        ]);
    }

    public function seedRecruitPage()
    {
        $data = getJson(__DIR__ . '/recruit-field.json', true);
        $category_service = app(CategoryAdminService::class);
        $recruit_cat = $category_service->store(collect([
            'title' => '菁英招募',
            'alias' => 'recruit',
            'parent_id' => 1,
            'state'  => 1,
            'content_type' => 'recruit',
            'description' => '',
            'access'   => 1
        ]));
        $item = Item::query()->where('alias', '=', 'recruit')->first();
        if (!$item) {
            Item::create([
                'title' => '菁英招募',
                'alias' => 'recruit',
                'category_id' => $recruit_cat->id,
                'description' => json_encode($data['recruit']),
                'access' => 1,
                'created_by' => 1
            ]);
        } else {
            $item->description = json_encode($data['recruit']);
            $item->save();
        }
    }
}
