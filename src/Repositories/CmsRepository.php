<?php

namespace DaydreamLab\Cms\Repositories;

use DaydreamLab\JJAJ\Repositories\BaseRepository;

class CmsRepository extends BaseRepository
{
    public function restore($item, $user)
    {
        if ($item->locked_by == 0
            || $item->locked_by == $user->id
            || $user->higherPermissionThan($item->locker)
        ) {
            $data = [
                'locked_by' => null,
                'locked_at' => null
            ];
            return $this->update($item, $data);
        } else {
            return false;
        }
    }
}
