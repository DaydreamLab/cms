<?php

namespace DaydreamLab\Cms\Resources\IotTag\Front\Models;

use DaydreamLab\Cms\Models\IotNews\Front\IotNewsFront;
use DaydreamLab\Cms\Models\IotResource\Front\IotResourceFront;
use DaydreamLab\Cms\Models\IotSolution\Front\IotSolutionFront;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotTagFrontSearchItemResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        switch ( get_class($this->resource) ) {
            case IotNewsFront::class:
                $type = 'news';
                break;
            case IotResourceFront::class:
                $type = 'resource';
                break;
            case IotSolutionFront::class:
                $type = 'solution';
                break;
            default:
                $type = '';
                break;
        }

        return [
            'alias'         => $this->alias,
            'title'         => $this->title,
            'introtext'     => $this->introtext,
            'description'   => strip_tags($this->description),
            'type'          => $type
        ];
    }
}
