<?php

namespace DaydreamLab\Cms\Resources\Product\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ProductAdminResource extends BaseJsonResource
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
