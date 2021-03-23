<?php


namespace DaydreamLab\Cms\Tests\Feature\Front\Tag;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Tests\BaseTest;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\Response;

class SearchItemTest extends BaseTest
{
    use DatabaseTransactions;

    private $baseUrl = 'api/item/search';

    public function test_search_item_on_different_language_site_successfully()
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
            $this->post($this->baseUrl, [
                'search'   => '測試 test',
                'language' => $lang
            ])
                 ->assertStatus(Response::HTTP_OK);
        }
    }

    public function test_search_item_response_data_structure_is_correctly()
    {
        $this->post($this->baseUrl, [
            'search'   => '測試 test',
            'language' => 'zh-Hant'
        ])
             ->assertStatus(Response::HTTP_OK)
             ->assertJsonStructure([
                 "code",
                 "message",
                 "status",
                 "data" => [
                     "items"      => [
                         [
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
                             "creator",
                             "tags",
                             "category_title",
                             "category_alias",
                             "language_title",
                         ],
                     ],
                     "pagination" => [
                         "current_page",
                         "first_page_url",
                         "from",
                         "last_page",
                         "last_page_url",
                         "next_page_url",
                         "path",
                         "per_page",
                         "prev_page_url",
                         "to",
                         "total",
                     ],
                     "records"
                 ],

             ]);
    }

    public function test_search_hant_item_response_data_count_is_not_empty()
    {
        factory(Item::class)->create([
            'title'            => '測試關鍵字搜尋',
            'description'      => '天竺鼠車車醫療電動車醫療研討會數位醫療AI電子設備台美交流外貿協會',
            'full_text_search' => '天竺 天竺鼠 天竺鼠車車 醫療 電動車 醫療 研討會 數位 醫療 AI 電子 設備 台美 交流 外貿協會',
            'category_id'      => factory(Category::class)->create()->id,
            'language'         => 'zh-Hant',
        ]);

        $searchWord = '天竺鼠 研討會 電動車 中華民國';
        $response = $this->post($this->baseUrl, [
            'search'   => $searchWord,
            'language' => 'zh-Hant',
        ]);
        $response = $this->getContentData($response);

        $this->assertNotEmpty($response);

        // 查找每一個item是否都至少包含一個searchWord
        foreach ($response as $item) {
            $this->assertContains($searchWord, $item);
        }

    }

    public function test_search_en_item_response_date_count_is_not_empty()
    {
        factory(Item::class)->create([
            'title'            => 'test for keyword search',
            'description'      => 'Texas is the technological hub of the United States and welcomed the Taiwan delegation to visit Texas.',
            'full_text_search' => 'Texas is the technological hub of the United States and welcomed the Taiwan delegation to visit Texas.',
            'category_id'      => factory(Category::class)->create()->id,
            'language'         => 'en',
        ]);

        $searchWord = 'Taiwan technological';
        $response = $this->post($this->baseUrl, [
            'search'   => $searchWord,
            'language' => 'en',
        ]);
        $response = $this->getContentData($response);

        $this->assertNotEmpty($response);

        // 查找每一個item是否都至少包含一個searchWord
        foreach ($response as $item) {
            $this->assertContains($searchWord, $item);
        }
    }
}
