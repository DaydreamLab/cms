<?php


namespace DaydreamLab\Cms\Tests\Feature\Front\Tag;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Tests\BaseTest;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\Response;

class GetItemTest extends BaseTest
{
    use DatabaseTransactions;

    private $baseUrl = 'api/item/';

    public function test_get_item_on_different_language_site_successfully()
    {
        $language = [
            'all'  => '*',
            'hant' => 'zh-Hant',
            'en'   => 'en'
        ];

        foreach ($language as $alias => $lang) {
            ${'category' . $alias} = factory(Category::class)->create(['language' => $lang]);

            ${'item' . $alias} = factory(Item::class)->create([
                'category_id' => ${'category' . $alias}->id,
                'language'    => $lang,
            ]);
        }

        foreach ($language as $alias => $lang) {
            $uri = $this->baseUrl . ${'item' . $alias}->alias;
            $this->get($uri . '?language=' . $lang)
                 ->assertStatus(Response::HTTP_OK);
        }
    }

    public function test_response_data_structure_is_correctly()
    {
        $item = factory(Item::class)->create([
            'category_id' => factory(Category::class)->create()->id,
        ]);


        $this->get($this->baseUrl . $item->alias)
             ->assertStatus(Response::HTTP_OK)
             ->assertJsonStructure([
                 "code",
                 "message",
                 "status",
                 "data" => [
                     "items" => [
                         "title",
                         "alias",
                         "ordering",
                         "introimage",
                         "introtext",
                         "image",
                         "description",
                         "video",
                         "link",
                         "hits",
                         "featured",
                         "featured_ordering",
                         "language",
                         "metadesc",
                         "metakeywords",
                         "extrafields",
                         "created_at",
                         "publish_up",
                         "publish_down",
                         "start_date",
                         "end_date",
                         "previous",
                         "next",
                         "creator",
                         "tags",
                         "category_title",
                         "category_alias",
                         "language_title",
                     ],
                     "records",
                 ],
             ]);
    }


}
