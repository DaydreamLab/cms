<?php

namespace DaydreamLab\Cms\Resources\Menu\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class MenuFrontListResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title'                 => $this->title,
            'alias'                 => $this->alias,
        ];
    }
}
