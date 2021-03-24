<?php


namespace DaydreamLab\Cms\Tests;


use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Menu\Menu;
use DaydreamLab\JJAJ\Tests\BaseTest;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\Response;

class GetMenuTest extends BaseTest
{
    private $baseUrl = 'api/menu/';

    public function test_get_menu_successfully()
    {
        $menu = factory(Menu::class)->create([
            'category_id' => Category::where('alias', 'main-menu')->first()->id
        ]);

        $this->get($this->baseUrl . $menu->alias)
            ->assertStatus(Response::HTTP_OK);
    }
}
