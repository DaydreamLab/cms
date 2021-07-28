<?php

namespace DaydreamLab\Cms\Resources\CustomerMessage\Admin\Models;

use DaydreamLab\Cms\Resources\CustomerMessageReply\Admin\Collections\CustomerMessageReplyAdminListResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CustomerMessageAdminResource extends BaseJsonResource
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
            'brandId'       => $this->brand_id,
            'brandTitle'    => $this->brand->title,
            'name'          => $this->name,
            'type'          => $this->type,
            'status'        => $this->status,
            'email'         => $this->email,
            'backupEmail'   => $this->backupEmail,
            'phoneCode'     => $this->phoneCode,
            'phone'         => $this->phone,
            'extNumber'     => $this->extNumber,
            'mobilePhoneCode' => $this->mobilePhoneCode,
            'mobilePhone'   => $this->mobilePhone,
            'faxCode'       => $this->faxCode,
            'fax'           => $this->fax,
            'district'      => $this->district,
            'address'       => $this->address,
            'zipcode'       => $this->zipcode,
            'message'       => nl2br($this->message),
            'companyName'   => $this->companyName,
            'jobTitle'      => $this->jobTitle,
            'locked_at'     => $this->getDateTimeString($this->locked_at, $tz),
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'lockerName'    => $this->lockerName,
            'creatorName'   => $this->creatorName,
            'updaterName'   => $this->updaterName,
            'locker'        => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : [],
            'replies'       => new CustomerMessageReplyAdminListResourceCollection($this->replies, false)
        ];
    }
}
