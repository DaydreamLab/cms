<?php

namespace DaydreamLab\Cms\Resources\Module\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ModuleAdminListResource extends BaseJsonResource
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
            'id'                    => $this->id,
            'title'                 => $this->title,
            'alias'                 => $this->alias,
            'category_title'        => $this->category_title,
            'state'                 => $this->state,
            'access_title'          => $this->access_title,
            'language_title'        => $this->language_title,
        ];
    }
}
