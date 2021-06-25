<?php

namespace DaydreamLab\Cms\Resources\Brand\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class BrandAdminResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tz = $request->user('api')->timezone;
        return [
            'id'                        => $this->id,

        ];
    }
}
