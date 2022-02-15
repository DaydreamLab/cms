<?php

namespace DaydreamLab\Cms\Services\IotCategory\Admin;

use DaydreamLab\Cms\Repositories\IotCategory\Admin\IotCategoryAdminRepository;
use DaydreamLab\Cms\Services\IotCategory\IotCategoryService;
use Illuminate\Support\Collection;

class IotCategoryAdminService extends IotCategoryService
{
    public function __construct(IotCategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function findSubTreeIds($id)
    {
        return $this->repo->findSubTreeIds($id);
    }


    public function store(Collection $input)
    {
        return parent::store($input);

    }
}
