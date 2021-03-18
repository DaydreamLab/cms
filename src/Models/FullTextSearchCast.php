<?php

namespace DaydreamLab\Cms\Models;

use Fukuball\Jieba\Finalseg;
use Fukuball\Jieba\Jieba;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class FullTextSearchCast implements CastsAttributes
{
    public function get($model, $key, $value, $attributes)
    {
        return null;
    }

    /**
     * 設定full_text_search內容
     * 利用分詞系統將關鍵字提取，用於全文檢索搜尋
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param string $key
     * @param mixed $value
     * @param array $attributes
     * @return string
     */
    public function set($model, string $key, $value, array $attributes)
    {
        if ($value == '')
            return $value;

        Jieba::init();
        Finalseg::init();
        ini_set('memory_limit', '1024M');

        // 替換特殊字元＋移除html標籤
        $str = str_replace(
            array("\n", "\r\n", '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*',
                  '+', ', ', '-', '.', '/', ':', ';', '<', '=', '>',
                  '?', '@', '[', ']', '^', '_', '`', '{', '|',
                  '}', '~', '；', '﹔', '︰', '﹕', '：', '，', '﹐', '、',
                  '．', '﹒', '˙', '·', '。', '？', '！', '～', '‥', '‧',
                  '′', '〃', '〝', '〞', '‵', '‘', '’', '『', '』', '「',
                  '」', '“', '”', '…', '❞', '❝', '﹁', '﹂', '﹃', '﹄'),
            '',
            strip_tags($value));

        // 將處理過的字串做適用於搜尋的分詞
        $cut = Jieba::cutForSearch($str);
        unset ($str);

        return implode(' ', $cut);
    }


}
