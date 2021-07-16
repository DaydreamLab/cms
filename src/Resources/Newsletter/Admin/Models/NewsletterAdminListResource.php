<?php

namespace DaydreamLab\Cms\Resources\Newsletter\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class NewsletterAdminListResource extends BaseJsonResource
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
            'id'                => $this->id,

            'title'             => $this->title,

        ];
    }
}