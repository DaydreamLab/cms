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
            'brands'                    => $this->brands->map(function ($b) {
                return $b->only(['alias', 'title', 'logo_image', 'contact']);
            }),
            'featured'                  => $this->featured,
            'featured_ordering'         => $this->featured_ordering,
            'extrafields'               => $this->extrafields,
            'category'                  => [
                'title' => $this->category->title,
                'alias' => $this->category->alias
            ],
            'publish_up'                => $this->getDateTimeString($this->publish_up)
        ];
    }
}
