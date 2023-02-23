<?php

namespace DaydreamLab\Cms\Resources\Curation\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CurationAdminListResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tz = config('daydreamlab.cms.timezone');
        return [
            'id'            => $this->id,
            'title'         => $this->title,
            'slideshow'     => $this->slideshow,
            'description'   => $this->description,
            'isIndex'       => $this->isIndex,
            'params'        => $this->params,
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'     => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'   => $this->creatorName,
            'updaterName'   => $this->updaterName,
            'lockerName'    => $this->lockerName,
        ];
    }
}
