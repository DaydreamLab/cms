<?php

namespace DaydreamLab\Cms\Services\Site;

use DaydreamLab\Cms\Repositories\Site\SiteRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class SiteService extends BaseService
{
    protected $type = 'Site';

    public function __construct(SiteRepository $repo)
    {
        parent::__construct($repo);
    }
}
