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
        return [
            'title'             => $this->title,
            'alias'             => $this->alias,
            'ordering'          => $this->ordering,
            'introimage'        => $this->introimage,
            'introtext'         => $this->introtext,
            'image'             => $this->image,
            'description'       => $this->description,
            'video'             => $this->video,
            'link'              => $this->link,
            'hits'              => $this->hits,
            'featured'          => $this->featured,
            'featured_ordering' => $this->featured_ordering,
            'language'          => $this->language,
            'metadesc'          => $this->metadesc,
            'metakeywords'      => $this->metakeywords,
            'extrafields'       => $this->extrafields,
            'created_at'        => optional($this->created_at)->toDateTimeString(),
            'publish_up'        => optional($this->publish_up)->toDateTimeString(),
            'start_date'        => optional($this->start_date)->toDateTimeString(),
            'end_date'          => optional($this->end_date)->toDateTimeString(),
            'previous'          => $this->previous,
            'next'              => $this->next,
            'creator'           => $this->creator,
            'tags'              => $this->tags,
            'category_title'    => $this->category_title,
            'category_alias'    => $this->category_alias,
            'language_title'    => $this->language_title,
        ];
    }
}
