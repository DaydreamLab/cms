<?php

namespace DaydreamLab\Cms\Models;

use DaydreamLab\Cms\Support\Cut;
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

        return Cut::cutForSearch($value, ['loadUserDict' => base_path('user_dict.txt')]);
    }


}
