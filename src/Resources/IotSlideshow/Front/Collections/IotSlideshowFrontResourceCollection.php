<?php

namespace DaydreamLab\Cms\Resources\IotSlideshow\Front\Collections;

use DaydreamLab\Cms\Resources\IotSlideshow\Front\Models\IotSlideshowFrontResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotSlideshowFrontResourceCollection extends BaseResourceCollection
{
    public $collects = IotSlideshowFrontResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
