<?php

namespace DaydreamLab\Cms\Controllers\CustomerMessageReply\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminFeaturedRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminGetItemRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminOrderingRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminRemoveRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminRestoreRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminSearchRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminStateRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Admin\CustomerMessageReplyAdminStoreRequest;
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


    public function featured(CustomerMessageReplyAdminFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(CustomerMessageReplyAdminFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(CustomerMessageReplyAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(CustomerMessageReplyAdminOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(CustomerMessageReplyAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(CustomerMessageReplyAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(CustomerMessageReplyAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(CustomerMessageReplyAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(CustomerMessageReplyAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
