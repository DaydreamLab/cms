<?php

namespace DaydreamLab\Cms\Repositories\Newsletter\Admin;

use DaydreamLab\Cms\Models\Newsletter\Admin\NewsletterAdmin;
use DaydreamLab\Cms\Repositories\Newsletter\NewsletterRepository;

class NewsletterAdminRepository extends NewsletterRepository
{
    public function __construct(NewsletterAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
