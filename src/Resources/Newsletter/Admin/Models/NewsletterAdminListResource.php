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
            'number'            => $this->number,
            'category_title'    => $this->newsletterCategory->title,
            'state'             => $this->state,
            'title'             => $this->title,
            'publish_up'        => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'locker'            => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : []
        ];
    }
}