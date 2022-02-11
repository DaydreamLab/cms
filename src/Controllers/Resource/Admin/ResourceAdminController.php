<?php

namespace DaydreamLab\Cms\Controllers\Resource\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Resource\Admin\ResourceAdminGetItemRequest;
use DaydreamLab\Cms\Requests\Resource\Admin\ResourceAdminRemoveRequest;
use DaydreamLab\Cms\Requests\Resource\Admin\ResourceAdminRestoreRequest;
use DaydreamLab\Cms\Requests\Resource\Admin\ResourceAdminSearchRequest;
use DaydreamLab\Cms\Requests\Resource\Admin\ResourceAdminStateRequest;
use DaydreamLab\Cms\Requests\Resource\Admin\ResourceAdminStoreRequest;
use DaydreamLab\Cms\Resources\Resource\Admin\Collections\ResourceAdminSearchResourceCollection;
use DaydreamLab\Cms\Services\Resource\Admin\ResourceAdminService;
use Throwable;

class ResourceAdminController extends CmsController
{
    protected $modelName = 'Resource';

    public function __construct(ResourceAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(ResourceAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ResourceAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ResourceAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ResourceAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ResourceAdminSearchResourceCollection::class);
    }


    public function state(ResourceAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ResourceAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
