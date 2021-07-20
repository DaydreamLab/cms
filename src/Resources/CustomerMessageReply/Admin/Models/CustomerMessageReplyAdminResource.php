<?php

namespace DaydreamLab\Cms\Resources\CustomerMessageReply\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CustomerMessageReplyAdminResource extends BaseJsonResource
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
            'channels'      => $this->channels,
            'subject'       => $this->subject,
            'content'       => $this->content,
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'creatorName'   => $this->creatorName,
            'updaterName'   => $this->updaterName,
        ];
    }
}
