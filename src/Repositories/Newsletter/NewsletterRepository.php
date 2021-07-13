<?php

namespace DaydreamLab\Cms\Repositories\Newsletter;

use DaydreamLab\Cms\Models\Newsletter\Newsletter;
use DaydreamLab\Cms\Repositories\CmsRepository;

class NewsletterRepository extends CmsRepository
{
    protected $modelName = 'Newsletter';

    public function __construct(Newsletter $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
