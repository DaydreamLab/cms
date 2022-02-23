<?php

namespace DaydreamLab\Cms\Services\IotEvent\Admin;

use DaydreamLab\Cms\Repositories\IotEvent\Admin\IotEventAdminRepository;
use DaydreamLab\Cms\Services\IotEvent\IotEventService;
use Illuminate\Support\Collection;

class IotEventAdminService extends IotEventService
{
    public function __construct(IotEventAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function search(Collection $input)
    {
        if ($input->get('state') == null) {
            $q = $input->get('q');
            $q = $q->whereIn('state', [0, 1]);
            $input->put('q', $q);
        }
        return parent::search($input);
    }


    public function store(Collection $input)
    {
        if ( $input->get('state') == 1 && $input->get('publish_up') == null ) {
            $input->put('publish_up', now());
        }

        $result = parent::store($input);
        if ( $id = $input->get('id') ) {
            $result = $this->find($id);
        }
        $this->response = $result;
        return $result;
    }
}
