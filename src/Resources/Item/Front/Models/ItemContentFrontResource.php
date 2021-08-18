<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ItemContentFrontResource extends BaseJsonResource
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
            'category_alias'            => $this->category->alias,
            'category_title'            => $this->category->title,
            'brands'                    => $this->brands->map(function ($b) {
                return $b->only(['alias', 'title', 'logo_image', 'contact']);
            }),
            'state'                     => $this->state,
            'ordering'                  => $this->ordering,
            'featured'                  => $this->featured,
            'featured_ordering'         => $this->featured_ordering,
            'introimage'                => $this->introimage,
            'introtext'                 => $this->introtext,
            'image'                     => $this->image,
            'description'               => $this->description,
            'link'                      => $this->link,
            'video'                     => $this->video,
            'hits'                      => $this->hits,
            'access'                    => $this->access,
            'language'                  => $this->language,
            'params'                    => $this->params,
            'tags'                      => $this->tags,
            'products'                  => $this->products,
            'extrafields'               => $this->extrafields,
            'prev'                      => $this->previous,
            'next'                      => $this->next
        ];
    }
}
