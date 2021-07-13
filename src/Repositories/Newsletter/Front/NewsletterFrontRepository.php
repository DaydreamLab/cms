<?php

namespace DaydreamLab\Cms\Repositories\Newsletter\Front;

use DaydreamLab\Cms\Models\Newsletter\Front\NewsletterFront;
use DaydreamLab\Cms\Repositories\Newsletter\NewsletterRepository;

class NewsletterFrontRepository extends NewsletterRepository
{
    public function __construct(NewsletterFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
