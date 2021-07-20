<?php

namespace DaydreamLab\Cms\Resources\Brand\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class BrandAdminResource extends BaseJsonResource
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
            'alias'                 => $this->alias,
            'title'                 => $this->title,
            'title_zhtw'            => $this->title_zhtw,
            'description'           => $this->description,
            'factory_url'           => $this->factory_url,
            'contact'               => ($this->contact == null) ? [] : $this->contact,
            'contact_email'         => $this->contact_email,
            'business_representitive' => $this->business_representitive,
            'logo_image'            => $this->logo_image,
            'banner_image'          => $this->banner_image,
            'banner_link'           => $this->banner_link,
            'params'                => $this->params,
            'tracking'              => ($this->tracking == null) ? [] : $this->tracking,
            'state'                 => $this->state,
            'created_at'            => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'            => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'             => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'           => $this->creatorName,
            'updaterName'           => $this->updaterName,
            'lockerName'            => $this->lockerName,
            'locker'                => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : [],
            'tags'                  => $this->tags
        ];
    }
}
