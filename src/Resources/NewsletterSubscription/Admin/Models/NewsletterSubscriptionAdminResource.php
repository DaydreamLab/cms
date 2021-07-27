<?php

namespace DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class NewsletterSubscriptionAdminResource extends BaseJsonResource
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
            'email'             => $this->email,
            'user_group'        => ($this->user) ? $this->user->groups->map(function ($g) {
                return $g->only(['id', 'title']);
            }) : [],
            'name'              => ($this->user) ? $this->user->name : '',
            'state'             => ($this->user) ? $this->user->state_ : '',
            'city'              => ($this->user) ? $this->user->city : '',
            'district'          => ($this->user) ? $this->user->district : '',
            'address'           => ($this->user) ? $this->user->address : '',
            'zipcode'           => ($this->user) ? $this->user->zipcode : '',
            'phone'             => ($this->user) ? $this->user->phoneCode.$this->user->phone : '',
            'mobilePhone'       => ($this->user) ? $this->user->mobilePhoneCode.$this->user->mobilePhone : '',
            'newsletterCategories' => $this->newsletterCategories->map(function ($n) {
                return $n->only(['id', 'alias', 'title']);
            }),
            'company'           => ($this->company) ? $this->company->name : '',
            'state'             => $this->state,
            'created_at'        => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'        => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'         => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'       => $this->creatorName,
            'updaterName'       => $this->updaterName,
            'lockerName'        => $this->lockerName,
            'locker'            => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : []
        ];
    }
}