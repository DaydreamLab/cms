<?php

namespace DaydreamLab\Cms\Services\IoTCategory\Admin;

use DaydreamLab\Cms\Repositories\IoTCategory\Admin\IoTCategoryAdminRepository;
use DaydreamLab\Cms\Services\IoTCategory\IoTCategoryService;
use Illuminate\Support\Collection;

class IoTCategoryAdminService extends IoTCategoryService
{
    public function __construct(IoTCategoryAdminRepository $repo)
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
