<?php

namespace DaydreamLab\Cms\Services;

use DaydreamLab\JJAJ\Exceptions\InternalServerErrorException;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\ApiJsonResponse;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class CmsService extends BaseService
{
    use LoggedIn, ApiJsonResponse;

    protected $package = 'Cms';

    /**
     * @param Collection $input
     * @return bool
     */
    public function restore(Collection $input)
    {
        $result = false;
        foreach ($input->get('ids') as $id) {
            $item = $this->checkItem(collect(['id' => $id]));

            $result = $this->repo->restore($item, $this->getUser());

            if (!$result) break;
        }

        if ($result) {
            $this->status = 'RestoreSuccess';
            $this->response = null;
        } else {
            throw new InternalServerErrorException('InsufficientPermissionRestore', [
                'lockerName' => $item->lockerName,
                'locked_at' => $this->getDateTimeString($item->locked_at, $this->getUser()->timezone)
            ], null, $this->modelName);
        }

        return $result;
    }
}
