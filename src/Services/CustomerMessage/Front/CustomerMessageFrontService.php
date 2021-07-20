<?php

namespace DaydreamLab\Cms\Services\CustomerMessage\Front;

use DaydreamLab\Cms\Repositories\CustomerMessage\Front\CustomerMessageFrontRepository;
use DaydreamLab\Cms\Services\CustomerMessage\CustomerMessageService;

class CustomerMessageFrontService extends CustomerMessageService
{
    public function __construct(CustomerMessageFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
