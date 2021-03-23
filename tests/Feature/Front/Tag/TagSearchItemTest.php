<?php


namespace DaydreamLab\Cms\Tests\Feature\Front\Tag;


use DaydreamLab\JJAJ\Tests\BaseTest;

class TagSearchItemTest extends BaseTest
{
    private $baseUrl = 'api/tag/search/items';

    public function test_get_tag_limit()
    {
        $response = $this->post($this->baseUrl . '?limit=3');

        $count = count($this->getContentData($response));

        $this->assertEquals(3, $count);
    }

    public function test_get_tag_language()
    {
        $language = [
            '*',
            'zh-Hant',
            'en'
        ];
        foreach ($language as $lang) {
            $response = $this->post($this->baseUrl . '?language=' . $lang);
            $response->assertStatus(200);
        }
    }


}
