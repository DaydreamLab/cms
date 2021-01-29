<?php

namespace DaydreamLab\Cms\Traits\Model;

use DaydreamLab\User\Models\User\User;

trait UserInfo
{
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }


    public function locker()
    {
        return $this->hasOne(User::class, 'id', 'locked_by')->first();
    }


    public function updater()
    {
        return $this->hasOne(User::class, 'id', 'updated_by');
    }


    public function getCreatorAttribute()
    {
        $creator = $this->creator()->first();

        return $creator ? $creator->nickname : null;
    }


    public function getLockerAttribute()
    {
        $locker =  $this->locker()->first();

        return $locker ? $locker->nickname : null;
    }


    public function getUpdaterAttribute()
    {
        $updater = $this->updater()->first();

        return $updater ? $updater->nickname : null;
    }
}