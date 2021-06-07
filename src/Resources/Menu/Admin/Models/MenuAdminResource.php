<?php

namespace DaydreamLab\Cms\Resources\Menu\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class MenuAdminResource extends BaseJsonResource
{
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
            'id'                    => $this->id,
            'title'                 => $this->title,
            'tree_title'            => $this->tree_title,
            'alias'                 => $this->alias,
            'category_id'           => $this->category_id,
            'category_title'        => $this->category_title,
            'state'                 => $this->state,
            'description'           => $this->description,
            'site_id'               => $this->site,
            'host'                  => $this->host,
            'host_title'            => $this->host_title,
            'access'                => $this->access,
            'access_title'          => $this->access_title,
            'language'              => $this->language,
            'language_title'        => $this->language_title,
            'hidden'                => $this->hidden,
            'params'                => $this->params,
            'extrafields'           => $this->extrafields,
            'created_at'            => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'            => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'             => $this->getDateTimeString($this->locked_at, $tz),
            'publish_up'            => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'          => $this->getDateTimeString($this->publish_down, $tz),
            'creatorName'           => $this->creatorName,
            'updaterName'           => $this->updaterName,
            'lockerName'            => $this->lockerName,
        ];
    }
}
