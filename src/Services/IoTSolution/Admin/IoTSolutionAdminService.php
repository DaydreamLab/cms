<?php

namespace DaydreamLab\Cms\Services\IoTSolution\Admin;

use DaydreamLab\Cms\Repositories\IoTSolution\Admin\IoTSolutionAdminRepository;
use DaydreamLab\Cms\Services\IoTSolution\IoTSolutionService;
use Illuminate\Support\Collection;

class IoTSolutionAdminService extends IoTSolutionService
{
    public function __construct(IoTSolutionAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
    }


    public function modifyMapping($item, $input)
    {
    }


    public function removeMapping($item)
    {
    }


    public function store(Collection $input)
    {
        if ( $input->get('state') == 1 && $input->get('publish_up') == null ) {
            $input->put('publish_up', now());
        }

        return parent::store($input);
    }
}
