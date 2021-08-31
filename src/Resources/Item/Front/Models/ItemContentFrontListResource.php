<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ItemContentFrontListResource extends BaseJsonResource
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
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'introimage'                => $this->introimage,
            'introtext'                 => $this->introtext,
            'description'               => $this->description,
            'brands'                    => $this->brands->map(function ($b) {
                return $b->only(['alias', 'title', 'logo_image', 'contact']);
            }),
            'featured'                  => $this->featured,
            'featured_ordering'         => $this->featured_ordering,
            'extrafields'               => $this->extrafields,
            'category_alias'            => $this->category->alias,
            'category_title'            => $this->category->title,
            'publish_up'                => $this->getDateTimeString($this->publish_up)
        ];
    }
}
