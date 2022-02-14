<?php

namespace DaydreamLab\Cms\Controllers\IoTSolution\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IoTSolution\Admin\IoTSolutionAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IoTSolution\Admin\IoTSolutionAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IoTSolution\Admin\IoTSolutionAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IoTSolution\Admin\IoTSolutionAdminSearchRequest;
use DaydreamLab\Cms\Requests\IoTSolution\Admin\IoTSolutionAdminStateRequest;
use DaydreamLab\Cms\Requests\IoTSolution\Admin\IoTSolutionAdminStoreRequest;
use DaydreamLab\Cms\Resources\IotSolution\Admin\Collections\IotSolutionAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotSolution\Admin\Models\IotSolutionAdminResource;
use DaydreamLab\Cms\Services\IoTSolution\Admin\IoTSolutionAdminService;
use Throwable;

class IoTSolutionAdminController extends CmsController
{
    protected $modelName = 'Solution';

    public function __construct(IoTSolutionAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IoTSolutionAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotSolutionAdminResource::class);
    }


    public function remove(IoTSolutionAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IoTSolutionAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IoTSolutionAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotSolutionAdminSearchResourceCollection::class);
    }


    public function state(IoTSolutionAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IoTSolutionAdminStoreRequest $request)
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
