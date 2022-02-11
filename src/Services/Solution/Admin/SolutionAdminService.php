<?php

namespace DaydreamLab\Cms\Services\Solution\Admin;

use DaydreamLab\Cms\Repositories\Solution\Admin\SolutionAdminRepository;
use DaydreamLab\Cms\Services\Solution\SolutionService;
use Illuminate\Support\Collection;

class SolutionAdminService extends SolutionService
{
    public function __construct(SolutionAdminRepository $repo)
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
