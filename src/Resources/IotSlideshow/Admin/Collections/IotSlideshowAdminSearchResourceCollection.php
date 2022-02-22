<?php

namespace DaydreamLab\Cms\Resources\IotSlideshow\Admin\Collections;

use DaydreamLab\Cms\Resources\IotSlideshow\Admin\Models\IotSlideshowAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotSlideshowAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotSlideshowAdminSearchResource::class;

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
