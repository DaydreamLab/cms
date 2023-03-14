<?php

namespace DaydreamLab\Cms\Resources\Topic\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;
use DaydreamLab\Dsth\Helpers\EnumHelper as DsthEnumHelper;

class TopicFrontListResource extends BaseJsonResource
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
            'title'         => $this->title,
            'alias'         => $this->alias,
            'subtitle'      => $this->subtitle,
            'image'         => $this->image,
            'banner'        => $this->banner,
            'color'         => $this->color,
            'icon'          => $this->icon,
            'params'        => $this->params,
            'enabled'       => $this->enabled,
            'featured'      => $this->featured,
            'isFuture'      => $this->isFuture,
        ];
    }
}
