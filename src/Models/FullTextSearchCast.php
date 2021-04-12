<?php

namespace DaydreamLab\Cms\Models;

use DaydreamLab\Cms\Support\Cut;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Support\Facades\File;

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

        $path = config('cms.item.load_customer_dictionary_path');
        // path不為空且檔案存在，使用分詞時加載自定義辭典
        if ($path && File::exists($path)) {
            return Cut::cutForSearch($value, [
                'loadUserDict' => $path
            ]);
        }

        return Cut::cutForSearch($value);
    }
    
}
