<?php

namespace DaydreamLab\Cms\Services\CustomerMessage\Admin;

use DaydreamLab\Cms\Repositories\CustomerMessage\Admin\CustomerMessageAdminRepository;
use DaydreamLab\Cms\Services\CustomerMessage\CustomerMessageService;

class CustomerMessageAdminService extends CustomerMessageService
{
    public function __construct(CustomerMessageAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
