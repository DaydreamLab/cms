<?php

namespace DaydreamLab\Cms\Resources\Menus\Front\Models;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\LengthAwarePaginator;

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
        $resutl = [];
        foreach ($items as $alias => $data) {
            $key = $alias;

            if ($data instanceof LengthAwarePaginator) {
                if ($alias === 'all') {
                    $key = $this->language === 'en'
                        ? 'All'
                        : '所有友站';
                }
                $data   = $data->toArray();
                $values = $data['data'];
                $values = array_map([$this, 'processImage'], $values);
                unset($data['data']);
                $paginate = $data;

                $result[$key] = [
                    'title'    => $key,
                    'items'    => $values,
                    'paginate' => $paginate
                ];
            } else if (is_array($data) && $alias === 'data') {
                $values       = array_map([$this, 'processImage'], $data);
                $result[$key] = $values;
            } else {
                $result[$key] = $data;
            }
        }

        return $result;
    }

    protected function processImage($data)
    {
        if (isset($data['image'])) {
            $data['image'] = json_decode($data['image'], 1);
        }

        return $data;
    }
}
