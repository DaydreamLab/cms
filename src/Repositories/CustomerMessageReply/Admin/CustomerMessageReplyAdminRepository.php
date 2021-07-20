<?php

namespace DaydreamLab\Cms\Repositories\CustomerMessageReply\Admin;

use DaydreamLab\Cms\Models\CustomerMessageReply\Admin\CustomerMessageReplyAdmin;
use DaydreamLab\Cms\Repositories\CustomerMessageReply\CustomerMessageReplyRepository;

class CustomerMessageReplyAdminRepository extends CustomerMessageReplyRepository
{
    public function __construct(CustomerMessageReplyAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
