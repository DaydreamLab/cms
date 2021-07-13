<?php

namespace DaydreamLab\Cms\Services\Newsletter\Admin;

use DaydreamLab\Cms\Repositories\Newsletter\Admin\NewsletterAdminRepository;
use DaydreamLab\Cms\Services\Newsletter\NewsletterService;

class NewsletterAdminService extends NewsletterService
{
    public function __construct(NewsletterAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
