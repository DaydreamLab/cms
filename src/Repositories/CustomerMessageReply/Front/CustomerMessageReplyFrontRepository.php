<?php

namespace DaydreamLab\Cms\Repositories\CustomerMessageReply\Front;

use DaydreamLab\Cms\Models\CustomerMessageReply\Front\CustomerMessageReplyFront;
use DaydreamLab\Cms\Repositories\CustomerMessageReply\CustomerMessageReplyRepository;

class CustomerMessageReplyFrontRepository extends CustomerMessageReplyRepository
{
    public function __construct(CustomerMessageReplyFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
