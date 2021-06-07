<?php

namespace DaydreamLab\Cms\Resources\Category\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CategoryFrontResource extends BaseJsonResource
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
            'state'                     => $this->state,
            'ordering'                  => $this->ordering,
            'introimage'                => $this->introimage,
            'introtext'                 => $this->introtext,
            'image'                     => $this->image,
            'description'               => $this->description,
            'content_type'              => $this->content_type,
            'extension'                 => $this->extension,
            'hits'                      => $this->hits,
            'access'                    => $this->access,
            'language'                  => $this->language,
            'params'                    => $this->params,
            'child_categories'          => $this->children->map(function ($c) {
                return ['title' => $c->title, 'alias' => $c->alias];
            }),
            //'item_extrafield_group_id'  => $this->extrafield_group_id,
            //'extrafield_group_id'       => $this->extrafield_group_id,
            'extrafields'               => $this->extrafields,
            'created_at'                => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            'updated_at'                => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_up'                => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_down'              => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
//            'creator'                   => $this->creator,
//            'updater'                   => $this->updater,
//            'locker'                    => $this->locker,
        ];
    }
}
