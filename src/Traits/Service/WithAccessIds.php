<?php

namespace DaydreamLab\Cms\Traits\Service;

trait WithAccessIds
{
    public function getAccessIds()
    {
        return $this->getUser()
            ? $this->getUser()->accessIds
            : (config('daydreamlab.cms.fornt.item.access_ids') ?: [1]);
    }
}