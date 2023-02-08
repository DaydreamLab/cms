<?php

namespace DaydreamLab\Cms\Resources\Item\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemAdminListResource extends JsonResource
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
            'id'                        => $this->id,
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'state'                     => $this->state,
            'ordering'                  => $this->ordering,
            'featured'                  => $this->featured,
            'featured_ordering'         => $this->featured_ordering,
            'introimage'                => $this->introimage,
            'introtext'                 => $this->introtext,
            'hits'                      => $this->hits,
            'language'                  => $this->language,
            'params'                    => $this->params,
            'extrafields'               => $this->extrafields,
            'created_at'                => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            'updated_at'                => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_up'                => $this->getDateTimeString($this->publish_up, config('daydreamlab.cms.timezone')),
            'publish_down'              => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
            'creator'                   => $this->creator,
            'updater'                   => $this->updater,
            'category'                  => [
                'title' => $this->category->title,
                'alias' => $this->category->alias
            ],
            'category_title' => $this->category->title
        ];
    }
}
