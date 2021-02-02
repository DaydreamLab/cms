<?php

namespace DaydreamLab\Cms\Services\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\Admin\ExtrafieldGroupAdminRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldGroupService;

class ExtrafieldGroupAdminService extends ExtrafieldGroupService
{
    protected $modelType = 'Admin';

    protected $search_keys = ['title', 'description'];

    public function __construct(ExtrafieldGroupAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
