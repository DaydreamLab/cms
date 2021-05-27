<?php

namespace DaydreamLab\Cms\Resources\Category\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryAdminResource extends JsonResource
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
        $tz = $request->user('api')->timezone;
        return [
            'id'                        => $this->id,
            'title'                     => $this->title,
            'tree_title'                => $this->tree_title,
            'alias'                     => $this->alias,
            'parent_id'                 => $this->parent_id,
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
            'item_extrafield_group_id'  => $this->item_extrafield_group_id,
            'extrafield_group_id'       => $this->extrafield_group_id,
            'extrafields'               => $this->extrafields,
            'created_at'                => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'                => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, $tz),
            'publish_up'                => $this->getDateTimeString($this->locked_at, $tz),
            'publish_down'              => $this->getDateTimeString($this->publish_down,$tz),
            'lockerName'                => $this->lockerName,
            'creatorName'               => $this->creatorName,
            'updaterName'               => $this->updaterName,
        ];
    }
}
