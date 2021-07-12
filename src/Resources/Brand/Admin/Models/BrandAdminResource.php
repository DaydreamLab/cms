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
            'code'                  => $this->code,
            'alias'                 => $this->alias,
            'title'                 => $this->title,
            'description'           => $this->description,
            'factory_url'           => $this->factory_url,
            'contact'               => $this->contact,
            'contact_email'         => $this->contact_email,
            'business_representitive' => $this->business_representitive,
            'logo_image'            => $this->logo_image,
            'banner_image'          => $this->banner_image,
            'banner_link'           => $this->banner_link,
            'metadesc'              => $this->metadesc,
            'metakeywords'          => $this->metakeywords,
            'tracking'              => $this->tracking,
            'state'                 => $this->state,
            'created_at'            => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'            => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'             => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'           => $this->creatorName,
            'updaterName'           => $this->updaterName,
            'lockerName'            => $this->lockerName
        ];
    }
}
