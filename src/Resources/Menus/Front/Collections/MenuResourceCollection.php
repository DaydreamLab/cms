<?php

namespace DaydreamLab\Cms\Resources\Menus\Front\Collections;

use DaydreamLab\Cms\Resources\Menus\Front\Models\MenuResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MenuResourceCollection extends ResourceCollection
{
    public $collects = MenuResource::class;
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
