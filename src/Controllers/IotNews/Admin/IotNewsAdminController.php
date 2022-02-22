<?php

namespace DaydreamLab\Cms\Controllers\IotNews\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotNews\Admin\IotNewsAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotNews\Admin\IotNewsAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotNews\Admin\IotNewsAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotNews\Admin\IotNewsAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotNews\Admin\IotNewsAdminStateRequest;
use DaydreamLab\Cms\Requests\IotNews\Admin\IotNewsAdminStoreRequest;
use DaydreamLab\Cms\Resources\IotNews\Admin\Collections\IotNewsAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotNews\Admin\Models\IotNewsAdminResource;
use DaydreamLab\Cms\Services\IotNews\Admin\IotNewsAdminService;
use Throwable;

class IotNewsAdminController extends CmsController
{
    protected $modelName = 'IotNews';

    public function __construct(IotNewsAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotNewsAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotNewsAdminResource::class);
    }


    public function remove(IotNewsAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotNewsAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotNewsAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotNewsAdminSearchResourceCollection::class);
    }


    public function state(IotNewsAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotNewsAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotNewsAdminResource::class);
    }
}
