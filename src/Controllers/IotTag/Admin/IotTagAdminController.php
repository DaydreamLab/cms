<?php

namespace DaydreamLab\Cms\Controllers\IotTag\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotTag\Admin\IotTagAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotTag\Admin\IotTagAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotTag\Admin\IotTagAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotTag\Admin\IotTagAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotTag\Admin\IotTagAdminStateRequest;
use DaydreamLab\Cms\Requests\IotTag\Admin\IotTagAdminStoreRequest;
use DaydreamLab\Cms\Resources\IotTag\Admin\Collections\IotTagAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotTag\Admin\Models\IotTagAdminResource;
use DaydreamLab\Cms\Services\IotTag\Admin\IotTagAdminService;
use Throwable;

class IotTagAdminController extends CmsController
{
    protected $modelName = 'IotTag';

    public function __construct(IotTagAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotTagAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotTagAdminResource::class);
    }


    public function remove(IotTagAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotTagAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotTagAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotTagAdminSearchResourceCollection::class);
    }


    public function state(IotTagAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotTagAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotTagAdminResource::class);
    }
}
