<?php

namespace DaydreamLab\Cms\Resources\CustomerMessage\Front\Models;

use DaydreamLab\Cms\Resources\CustomerMessageReply\Admin\Collections\CustomerMessageReplyAdminListResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CustomerMessageFrontResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tz = 'Asia/Taipei';

        return [
            'brandTitle'    => $this->brand->title,
            'name'          => $this->name,
            'type'          => $this->type,
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
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
        ];
    }
}
