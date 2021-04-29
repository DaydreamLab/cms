<?php

namespace DaydreamLab\Cms\Commands;

use Carbon\Carbon;
use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Console\Command;

class SitemapCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cms:sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create sitemap command';


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
        $xml = simplexml_load_string('<?xml version=\'1.0\' standalone=\'yes\'?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

        $url = $xml->addChild('url');
        $url->addChild('loc', config('app.url'));
        $url->addChild('lastmod', now()->format('Y-m-d'));

        $langs = ['en', 'zh-Hant'];
        $menus = ['about', 'news', 'schedule', 'award-2020', 'search', 'iot', 'connectivity', 'antenna', 'fivegplus'];
        foreach ($langs as $lang) {
            foreach ($menus as $menu) {
                $url = $xml->addChild('url');
                $url->addChild('loc', config('app.url'). '/' . $lang .'/' . $menu);
                $url->addChild('lastmod', now()->format('Y-m-d'));
            }
        }

        $categories = Category::where('extension', 'item')
            ->where('content_type', 'article')
            ->get();
        $articles = Item::whereIn('category_id', $categories->pluck('id')->all())
            ->get();

        foreach ($langs as $lang) {
            foreach ($articles as $article) {
                $url = $xml->addChild('url');
                $url->addChild('loc', config('app.url'). '/' . $lang .'/item/' . urlencode($article->alias));
                $url->addChild('lastmod', $article->updated_at
                    ? Carbon::parse($article->updated_at )->format('Y-m-d')
                    : Carbon::parse($article->created_at)->format('Y-m-d'));
            }
        }

        $xml->asXML('public/sitemap.xml');
    }
}
