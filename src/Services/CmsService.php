<?php

namespace DaydreamLab\Cms\Services;

use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class CmsService extends BaseService
{
    use LoggedIn;

    protected $package = 'Cms';

    /**
     * @param Collection $input
     * @return bool
     */
    public function checkout(Collection $input)
    {
        $result = false;
        foreach ($input->get('ids') as $id) {
            $item = $this->checkItem(collect(['id' => $id]));

            $result = $this->repo->checkout($item, $this->getUser());

            if (!$result) break;
        }

        if ($result) {
            $this->status = 'CheckoutSuccess';
            $this->response = null;
        } else {
            $this->throwResponse('CheckoutFail');
        }

        return $result;
    }
}
