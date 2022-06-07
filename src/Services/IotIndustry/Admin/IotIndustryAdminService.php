<?php

namespace DaydreamLab\Cms\Services\IotIndustry\Admin;

use DaydreamLab\Cms\Repositories\IotIndustry\Admin\IotIndustryAdminRepository;
use DaydreamLab\Cms\Services\IotIndustry\IotIndustryService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use Illuminate\Support\Collection;

class IotIndustryAdminService extends IotIndustryService
{
    use CmsCronJob;

    public function __construct(IotIndustryAdminRepository $repo)
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
        $this->setCronJob($input, $result);
        return $result;
    }
}
