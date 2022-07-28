<?php

namespace DaydreamLab\Cms\Helpers;

class DataHelper
{
    const CUSTOMER_MESSAGE_TYPES =  ['產品詢價', '客訴反應', '合作提案', '技術問題', '零壹課程', '其他', '帳號登入問題'];
    const CUSTOMER_MESSAGE_STATUS =  ['待處理', '處理中', '已處理', '不需處理'];
    const cities_order = ['基隆市', '臺北市', '新北市', '桃園市', '新竹縣', '新竹市','苗栗縣', '臺中市', '彰化縣',
        '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市','屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣',
        '金門縣', '連江縣', '釣魚臺', '南海島'];

    public static function completeImageUrl($url)
    {
        if ( $url != null ) {
            if ( strpos($url, 'http') === false ) {
                $url = config('app.url') . $url;
            }
        }
        return $url;
    }


    public static function usort($sort_array, $order)
    {
        usort($sort_array, function ($a, $b) use ($order) {
            $pos_a = array_search($a, $order);
            $pos_b = array_search($b, $order);
            return $pos_a - $pos_b;
        });

        return $sort_array;
    }
}

