<?php


namespace DaydreamLab\Cms\Support;


use Fukuball\Jieba\Finalseg;
use Fukuball\Jieba\Jieba;

class Cut
{
    /**
     * 初始化jieba分詞系統
     * @param array $options
     * $options['init' => [$args...]]     傳入初始化Jieba參數
     * $options['finalSeg' => [$args...]] 傳入初始化finalSeg參數
     * $options['loadUserDict' => $path]  傳入自定義擴充字典位置
     */
    private static function init(array $options = [])
    {
        $optionsArray = [
            'init' => Jieba::class,
            'finalSeg' => Finalseg::class,
            'loadUserDict' => Jieba::class,
        ];

        foreach ($optionsArray as $key => $class) {
            if (isset($options[$key]) && !empty($options['key'])) {
                $class::init($options[$key]);
            } else {
                $class::init();
            }
        }
    }

    /**
     * 適用於搜尋系統的分詞
     * @param $value
     * @param array $options
     * @param bool $implode
     * @return array|string
     */
    public static function cutForSearch($value, array $options = [], bool $implode = true)
    {
        self::init($options);
        $cut = Jieba::cutForSearch(self::replaceSign($value));

        return $implode ? implode(' ', $cut) : $cut;
    }

    /**
     * 一般分詞
     * @param $value
     * @param array $options
     * @param bool $implode
     * @return array|string
     */
    public static function cut($value, array $options = [], bool $implode = true)
    {
        self::init($options);
        $cut = Jieba::cut(self::replaceSign($value));

        return $implode ? implode(' ', $cut) : $cut;
    }

    /**
     * 替換特殊字元＋移除html標籤
     * @param $value
     * @return string
     */
    public static function replaceSign($value)
    {
        return str_replace(
            array("\n", "\r\n", '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*',
                  '+', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '-',
                  '_', '`', '{', '|', '}', '~', '；', '﹔', '︰', '﹕', '：', '，',
                  '﹐', '、', '．', '﹒', '˙', '·', '。', '？', '！', '～', '‥', '‧',
                  '′', '〃', '〝', '〞', '‵', '‘', '’', '『', '』', '「', '」', '“',
                  '”', '…', '❞', '❝', '﹁', '﹂', '﹃', '﹄'),
            ' ',
            strip_tags($value));
    }


}
