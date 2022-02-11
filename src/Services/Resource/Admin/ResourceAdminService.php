<?php

namespace DaydreamLab\Cms\Services\Resource\Admin;

use DaydreamLab\Cms\Repositories\Resource\Admin\ResourceAdminRepository;
use DaydreamLab\Cms\Services\Resource\ResourceService;
use Illuminate\Support\Collection;

class ResourceAdminService extends ResourceService
{
    public function __construct(ResourceAdminRepository $repo)
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
