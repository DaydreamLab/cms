<?php

namespace DaydreamLab\Cms\Repositories\CustomerMessageReply;

use DaydreamLab\Cms\Models\CustomerMessageReply\CustomerMessageReply;
use DaydreamLab\Cms\Repositories\CmsRepository;

class CustomerMessageReplyRepository extends CmsRepository
{
    protected $modelName = 'CustomerMessageReply';

    public function __construct(CustomerMessageReply $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
