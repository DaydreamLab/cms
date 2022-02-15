<?php

namespace DaydreamLab\Cms\Controllers\IotResource\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotResource\Admin\IotResourceAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotResource\Admin\IotResourceAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotResource\Admin\IotResourceAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotResource\Admin\IotResourceAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotResource\Admin\IotResourceAdminStateRequest;
use DaydreamLab\Cms\Requests\IotResource\Admin\IotResourceAdminStoreRequest;
use DaydreamLab\Cms\Resources\IotResource\Admin\Collections\IotResourceAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotResource\Admin\Models\IotResourceAdminResource;
use DaydreamLab\Cms\Services\IotResource\Admin\IotResourceAdminService;
use Throwable;

class IotResourceAdminController extends CmsController
{
    protected $modelName = 'Resource';

    public function __construct(IotResourceAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotResourceAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotResourceAdminResource::class);
    }


    public function remove(IotResourceAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotResourceAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotResourceAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotResourceAdminSearchResourceCollection::class);
    }


    public function state(IotResourceAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotResourceAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotResourceAdminResource::class);
    }
}
