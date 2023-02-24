<?php

namespace DaydreamLab\Cms\Resources\Curation\Admin\Models;

use DaydreamLab\Cms\Resources\Topic\Admin\Collections\TopicAdminListResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CurationAdminResource extends BaseJsonResource
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
            'alias'         => $this->alias,
            'slideshow'     => $this->slideshow,
            'introtext'     => $this->introtext,
            'description'   => $this->description,
            'script'        => $this->script,
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
