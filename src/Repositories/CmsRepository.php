<?php

namespace DaydreamLab\Cms\Repositories;

use DaydreamLab\JJAJ\Repositories\BaseRepository;

class CmsRepository extends BaseRepository
{
    public function checkout($item, $user)
    {
        if ($item->locked_by == 0
            || $item->locked_by == $user->id
            || $user->higherPermissionThan($item->locked_by)) {
            $item->locked_by = 0;
            $item->locked_at = null;

            return $this->update($item, $item);
        } else {
            return false;
        }
    }
}