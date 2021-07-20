<?php

namespace DaydreamLab\Cms\Repositories\CustomerMessage;

use DaydreamLab\Cms\Models\CustomerMessage\CustomerMessage;
use DaydreamLab\Cms\Repositories\CmsRepository;

class CustomerMessageRepository extends CmsRepository
{
    protected $modelName = 'CustomerMessage';

    public function __construct(CustomerMessage $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
