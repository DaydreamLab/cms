<?php

namespace DaydreamLab\Cms\Resources\Items\Front\Models;

use DaydreamLab\Cms\Traits\ResourceHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
