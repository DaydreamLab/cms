<?php

namespace DaydreamLab\Cms\Resources\IotCategory\Admin\Models;

use DaydreamLab\Cms\Resources\IotCategory\Admin\Collections\IotCategoryAdminTreeResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotCategoryAdminTreeResource extends BaseJsonResource
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
            'id'            => $this->id,
            'alias'         => $this->alias,
            'title'         => $this->title,
            'children'      => new IotCategoryAdminTreeResourceCollection($this->children, false)
        ];
    }
}
