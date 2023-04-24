<?php

namespace DaydreamLab\Cms\Controllers\Topic\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Topic\Admin\TopicAdminGetItemRequest;
use DaydreamLab\Cms\Requests\Topic\Admin\TopicAdminRemoveRequest;
use DaydreamLab\Cms\Requests\Topic\Admin\TopicAdminRestoreRequest;
use DaydreamLab\Cms\Requests\Topic\Admin\TopicAdminSearchRequest;
use DaydreamLab\Cms\Requests\Topic\Admin\TopicAdminStateRequest;
use DaydreamLab\Cms\Requests\Topic\Admin\TopicAdminStoreRequest;
use DaydreamLab\Cms\Resources\Topic\Admin\Collections\TopicAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Topic\Admin\Models\TopicAdminResource;
use DaydreamLab\Cms\Services\Topic\Admin\TopicAdminService;
use Throwable;

class TopicAdminController extends CmsController
{
    protected $modelName = 'Topic';

    public function __construct(TopicAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(TopicAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TopicAdminResource::class);
    }


    public function remove(TopicAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(TopicAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(TopicAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response(
            $this->service->status,
            $this->service->response,
            [],
            TopicAdminListResourceCollection::class
        );
    }


    public function state(TopicAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(TopicAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TopicAdminResource::class);
    }
}
