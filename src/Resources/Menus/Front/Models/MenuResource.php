<?php

namespace DaydreamLab\Cms\Resources\Menus\Front\Models;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str;

class MenuResource extends JsonResource
{
    private $hantTitles = [];

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
            if ($data instanceof LengthAwarePaginator) {
                $title  = $this->getTitle($alias, $this->language);
                $data   = $data->toArray();
                $values = $data['data'];
                unset($data['data']);
                $paginate = $data;

                $result[$key] = [
                    'title'    => $title,
                    'items'    => $values,
                    'paginate' => $paginate
                ];
            }
        }

        return $result ?: $items;
    }

    private function getTitle($alias, $lang)
    {
        if ($lang === 'en') {
            return Str::ucfirst($alias);
        }

        if ($alias == 'all') {
            return '所有友站';
        }

        if (!isset($this->hantTitles[$alias])) {
            $this->hantTitles[$alias] = CategoryFront::where('alias', $alias)
                                                     ->where('language', $lang)
                                                     ->first()->title;
        }

        return $this->hantTitles[$alias];
    }
}
