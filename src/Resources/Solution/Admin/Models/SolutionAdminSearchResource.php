<?php

namespace DaydreamLab\Cms\Resources\Solution\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class SolutionAdminSearchResource extends BaseJsonResource
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
            'state'             => $this->state,
            'featured'          => $this->featured
        ];
    }
}
