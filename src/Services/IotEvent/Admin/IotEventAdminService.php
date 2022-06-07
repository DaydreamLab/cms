<?php

namespace DaydreamLab\Cms\Services\IotEvent\Admin;

use DaydreamLab\Cms\Repositories\IotEvent\Admin\IotEventAdminRepository;
use DaydreamLab\Cms\Services\IotEvent\IotEventService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use Illuminate\Support\Collection;

class IotEventAdminService extends IotEventService
{
    use CmsCronJob;

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

        // 過濾掉不需要的欄位
        $input_sponsors = $input->get('sponsors');
        if ( count($input_sponsors) ) {
            $input->put('sponsors', array_map(function ($s) {
                $map_s['id'] = $s['id'];
                $map_s['title'] = $s['title'];
                $map_s['logo'] = $s['logo'];
                $map_s['link'] = $s['link'];
                return $map_s;
            }, $input_sponsors));
        }

        $result = parent::store($input);
        if ( $id = $input->get('id') ) {
            $result = $this->find($id);
        }
        $this->response = $result;
        $this->setCronJob($input, $result);
        return $result;
    }
}
