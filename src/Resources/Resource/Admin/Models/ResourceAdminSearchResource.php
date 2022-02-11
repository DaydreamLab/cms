<?php

namespace DaydreamLab\Cms\Resources\Resource\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ResourceAdminSearchResource extends BaseJsonResource
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
            'id'                => $this->id,
            'title'             => $this->title,
            'state'             => $this->state
        ];
    }
}
