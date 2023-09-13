<?php

namespace DaydreamLab\Cms\Commands\Feat\Crm;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Menu\Menu;
use DaydreamLab\Dsth\Models\Notification\NotificationCategory;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Models\NotificationTemplate\NotificationTemplate;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CrmInstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:crm-seed';

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
        $this->info('建立主通知分類中...');
        $marketingCategory = NotificationCategory::where('category', 'marketing')->first();
        if (!$marketingCategory) {
            NotificationCategory::create([
                'category' => 'marketing',
                'notifiableType' => NotificationTemplate::class
            ]);
        }
        $this->info('建立主通知分類完成');

        $this->info('建立主選單分類中...');
        Category::where('extension', 'menu')
            ->where('title', '!=', 'ROOT')
            ->get()
            ->each(function ($node) {
                $node->delete();
            });
        $root = Category::where('extension', 'menu')->first();
        $mainMenuCategory = $root->children()->create([
            'title'     => '主選單',
            'alias'     => 'main-menu',
            'path'      => '/menu/main-menu',
            'extension' => 'menu',
            'language'  => '*',
            'ordering'  => 1,
            'access'    => 1
        ]);
        $this->info('建立主選單分類完成');

        $this->info('建立主選單中...');
        DB::table('menus')->truncate();
        $jsons = Helper::getJson(__DIR__ . '/jsons/menus.json');
        $host = str_replace(
            'https://',
            '',
            str_replace('http://', '', config('app.url'))
        );
        foreach ($jsons as $json) {
            $children = $json['children'];
            unset($json['children']);
            $json['category_id'] = $mainMenuCategory->id;
            $json['host'] = $host;
            $parent = Menu::create($json);
            foreach ($children as $childData) {
                unset($children['children']);
                $childData['parent_id'] = $parent->id;
                $childData['category_id'] = $mainMenuCategory->id;
                $childData['host'] = $host;
                $parent->children()->create($childData);
            }
        }
        $this->info('建立主選單完成');

        $this->call('cms:sub-brand-extend');
    }
}
