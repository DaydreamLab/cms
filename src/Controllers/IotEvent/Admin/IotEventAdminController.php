<?php

namespace DaydreamLab\Cms\Controllers\IotEvent\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotEvent\Admin\IotEventAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotEvent\Admin\IotEventAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotEvent\Admin\IotEventAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotEvent\Admin\IotEventAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotEvent\Admin\IotEventAdminStateRequest;
use DaydreamLab\Cms\Requests\IotEvent\Admin\IotEventAdminStoreRequest;
use DaydreamLab\Cms\Resources\IotEvent\Admin\Collections\IotEventAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotEvent\Admin\Models\IotEventAdminResource;
use DaydreamLab\Cms\Services\IotEvent\Admin\IotEventAdminService;
use Throwable;

class IotEventAdminController extends CmsController
{
    protected $modelName = 'IotEvent';

    public function __construct(IotEventAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotEventAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotEventAdminResource::class);
    }


    public function remove(IotEventAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotEventAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotEventAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotEventAdminSearchResourceCollection::class);
    }


    public function state(IotEventAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotEventAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotEventAdminResource::class);
    }
}
