<?php

namespace DaydreamLab\Cms\Services\CustomerMessage\Admin;

use DaydreamLab\Cms\Repositories\CustomerMessage\Admin\CustomerMessageAdminRepository;
use DaydreamLab\Cms\Services\CustomerMessage\CustomerMessageService;
use DaydreamLab\JJAJ\Traits\LoggedIn;

class CustomerMessageAdminService extends CustomerMessageService
{
    use LoggedIn;

    public function __construct(CustomerMessageAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
