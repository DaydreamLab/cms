<?php

namespace DaydreamLab\Cms\Services\Resource\Front;

use DaydreamLab\Cms\Repositories\Resource\Front\ResourceFrontRepository;
use DaydreamLab\Cms\Services\Resource\ResourceService;

class ResourceFrontService extends ResourceService
{
    public function __construct(ResourceFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
