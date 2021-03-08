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
        return [
            'title'          => $this->title,
            'alias'          => $this->alias,
            'items'          => $this->items,
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
}
