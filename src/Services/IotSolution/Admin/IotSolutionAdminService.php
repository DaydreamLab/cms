<?php

namespace DaydreamLab\Cms\Services\IotSolution\Admin;

use DaydreamLab\Cms\Repositories\IotSolution\Admin\IotSolutionAdminRepository;
use DaydreamLab\Cms\Services\IotSolution\IotSolutionService;
use Illuminate\Support\Collection;

class IotSolutionAdminService extends IotSolutionService
{
    public function __construct(IotSolutionAdminRepository $repo)
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
