<?php

namespace DaydreamLab\Cms\Services\Newsletter\Front;

use DaydreamLab\Cms\Repositories\Newsletter\Front\NewsletterFrontRepository;
use DaydreamLab\Cms\Services\Newsletter\NewsletterService;

class NewsletterFrontService extends NewsletterService
{
    public function __construct(NewsletterFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
