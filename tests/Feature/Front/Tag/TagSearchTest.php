<?php


namespace DaydreamLab\Cms\Tests\Feature\Front\Tag;

use DaydreamLab\JJAJ\Tests\BaseTest;
use Illuminate\Http\Response;

class TagSearchTest extends BaseTest
{
    private $baseUrl = 'api/tag/search';

    public function test_get_tag_on_different_language_site_successfully()
    {
        $language = [
            '*',
            'zh-Hant',
            'en'
        ];

        foreach ($language as $lang) {
            $this->post($this->baseUrl . '?language=' . $lang)
                 ->assertStatus(Response::HTTP_OK);
        }
    }

    public function test_response_data_structure_is_correctly()
    {
        $this->post($this->baseUrl . '?limit=1')
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
                             "hits",
                             "creator",
                             "updater",
                             "language_title",
                         ]
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
                     "records",
                 ],
             ]);
    }



}
