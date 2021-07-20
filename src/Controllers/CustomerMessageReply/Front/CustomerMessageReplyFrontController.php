<?php

namespace DaydreamLab\Cms\Controllers\CustomerMessageReply\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontFeaturedOrderingRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontFeaturedRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontGetItemRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontOrderingRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontRemoveRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontRestoreRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontSearchRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontStateRequest;
use DaydreamLab\Cms\Requests\CustomerMessageReply\Front\CustomerMessageReplyFrontStoreRequest;
use DaydreamLab\Cms\Services\CustomerMessageReply\Front\CustomerMessageReplyFrontService;
use Throwable;

class CustomerMessageReplyFrontController extends CmsController
{
    protected $modelName = 'CustomerMessageReply';

    public function __construct(CustomerMessageReplyFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(CustomerMessageReplyFrontFeaturedRequest $request)
    {
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(CustomerMessageReplyFrontFeaturedOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(CustomerMessageReplyFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(CustomerMessageReplyFrontOrderingRequest $request)
    {
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(CustomerMessageReplyFrontRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(CustomerMessageReplyFrontRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(CustomerMessageReplyFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(CustomerMessageReplyFrontStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(CustomerMessageReplyFrontStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
