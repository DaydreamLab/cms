<?php

namespace DaydreamLab\Cms\Services\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\Admin\ExtrafieldAdminRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;

class ExtrafieldAdminService extends ExtrafieldService
{
    protected $type = 'ExtrafieldAdmin';

    public function __construct(ExtrafieldAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
