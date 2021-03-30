<?php

namespace DaydreamLab\Cms\Resources\Menus\Front\Models;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class MenuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $items = is_countable($this->items)
            ? $this->formatItems($this->items)
            : $this->items;

        return [
            'title'          => $this->title,
            'alias'          => $this->alias,
            'items'          => $items,
            'description'    => $this->description,
            'creator'        => $this->creator,
            'updater'        => $this->updater,
            'locker'         => $this->locker,
            'category_title' => $this->category_title,
            'category_alias' => $this->category_alias,
            'access_title'   => $this->access_title,
            'language_title' => $this->language_title,
        ];
    }


    protected function formatItems($items)
    {
        $result = [];

        $storageKeys = [];

        foreach ($items as $alias => $data) {
            $key = $alias;
            // 當module類型是 categories 類型且依照分類拆分
            if ($data instanceof LengthAwarePaginator) {
                $title  = $this->getTitle($alias, $this->language);
                $data   = $data->toArray();
                $values = $data['data'];
                unset($data['data']);
                $pagination = $data;

                $result[$key] = [
                    'title'    => $title,
                    'items'    => $values,
                    'pagination' => $pagination
                ];
            }
        }

        return $result ?: $items;
    }

    /**
     * 處理 menu內部的items title顯示
     * @param $alias
     * @param $lang
     * @return mixed|string
     */
    private function getTitle($alias, $lang)
    {
        if ($lang === 'en') {
            return Str::ucfirst($alias);
        }

        if ($alias == 'all') {
            return '所有友站';
        }

        if (Cache::has('hant_title_' . $alias)) {
            return Cache::get('hant_title_' . $alias);
        }

        $title = CategoryFront::where('alias', $alias)
                              ->where('language', $lang)
                              ->first()->title;

        // 利用cache減少查找資料庫頻率
        // cache生命週期30天
        Cache::put('hant_title_' . $alias, $title, 60*60*24*30);

        return $title;
    }
}
