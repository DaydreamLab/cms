<?php

namespace DaydreamLab\Cms\Repositories\CustomerMessage\Front;

use DaydreamLab\Cms\Models\CustomerMessage\Front\CustomerMessageFront;
use DaydreamLab\Cms\Repositories\CustomerMessage\CustomerMessageRepository;

class CustomerMessageFrontRepository extends CustomerMessageRepository
{
    public function __construct(CustomerMessageFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
