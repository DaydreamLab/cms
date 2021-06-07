<?php

namespace DaydreamLab\Cms\Resources\Language\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class LanguageAdminResource extends BaseJsonResource
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
            'id'                        => $this->id,
            'title'                     => $this->title,
            'type'                      => $this->type,
            'code'                      => $this->code,
            'sef'                       => $this->sef,
            'image'                     => $this->image,
            'state'                     => $this->state,
            'description'               => $this->description,
            'created_at'                => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'                => $this->getDateTimeString($this->updated_at, $tz),
            'creatorName'               => $this->creatorName,
            'updaterName'               => $this->updaterName,
        ];
    }
}
