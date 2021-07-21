<?php

namespace DaydreamLab\Cms\Controllers\CustomerMessageReply\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminStoreRequest;
use DaydreamLab\Cms\Resources\CustomerMessageReply\Admin\Models\CustomerMessageReplyAdminResource;
use DaydreamLab\Cms\Services\CustomerMessageReply\Admin\CustomerMessageReplyAdminService;
use Throwable;

class CustomerMessageReplyAdminController extends CmsController
{
    protected $modelName = 'CustomerMessageReply';

    public function __construct(CustomerMessageReplyAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function store(CustomerMessageReplyAdminStoreRequest $request)
    {
        //try {
            $this->service->store($request->validated());
        //} catch (Throwable $t) {
            //$this->handleException($t);
        //}

        return $this->response($this->service->status, $this->service->response, [], CustomerMessageReplyAdminResource::class);
    }
}
