<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemFrontResource extends JsonResource
{
    use CmsResource;
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
            'ordering'                  => $this->ordering,
            'featured'                  => $this->featured,
            'featured_ordering'         => $this->featured_ordering,
            'introimage'                => $this->introimage,
            'introtext'                 => $this->introtext,
            'image'                     => $this->image,
            'gallery'                   => $this->gallery,
            'description'               => $this->description,
            'link'                      => $this->link,
            'video'                     => $this->video,
            'hits'                      => $this->hits,
            'year'                      => $this->year,
            'breadcrumb'                => $this->breadcrumb,
            'language'                  => $this->language,
            'metadesc'                  => $this->metadesc,
            'metakeywords'              => $this->metakeywords,
            'extrafields'               => $this->extrafields,
            'tags'                      => $this->tags,
            'next'                      => $this->nextSibling->only(['title', 'alias']),
            'prev'                      => $this->prevSibling->only(['title', 'alias']),
            'publish_up'                => $this->getDateTimeString($this->publish_up, config('daydreamlab.cms.timezone')),
            'publish_down'              => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
            'creator'                   => $this->creator
        ];
    }
}
