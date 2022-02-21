<?php

namespace DaydreamLab\Cms\Resources\IotResource\Admin\Models;

use DaydreamLab\Cms\Resources\IotCategory\Admin\Collections\IotCategoryAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotIndustry\Admin\Collections\IotIndustryAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotSolution\Admin\Collections\IotSolutionAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotTag\Admin\Collections\IotTagAdminSearchResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotResourceAdminResource extends BaseJsonResource
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
            'id'            => $this->id,
            'alias'         => $this->alias,
            'title'         => $this->title,
            'introimage'    => $this->introimage,
            'introtext'     => $this->introtext,
            'images'        => $this->images,
            'description'   => $this->description,
            'points'        => $this->points,
            'video'         => $this->video,
            'documents'     => $this->documents,
            'state'         => $this->state,
            'params'        => $this->params,
            'locker'        => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : [],
            'locked_at'     => $this->getDateTimeString($this->locked_at, $tz),
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'publish_up'    => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'  => $this->getDateTimeString($this->publish_down, $tz),

            'categories'    => new IotCategoryAdminSearchResourceCollection($this->categories, false),
            'industries'    => new IotIndustryAdminSearchResourceCollection($this->industries, false),
            'tags'          => new IotTagAdminSearchResourceCollection($this->tags, false),
            'solutions'     => new IotSolutionAdminSearchResourceCollection($this->solutions, false)
        ];
    }
}
