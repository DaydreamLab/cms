<?php

namespace DaydreamLab\Cms\Resources\Items\Front\Models;

use DaydreamLab\Cms\Traits\ResourceHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class SearchResource extends JsonResource
{
    use ResourceHelper;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $resources = $this->resource;
        $result = [];
        foreach ($resources as $key => $resource) {
            if (is_array($resource) && isset($resource['image'])) {
                $result[] = $this->processImage($resource);
            } else {
                $result[$key] = $resource;
            }
        }
        return $result;
    }
}
