<?php

namespace DaydreamLab\Cms\Controllers\IotSolution\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotSolution\Admin\IotSolutionAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotSolution\Admin\IotSolutionAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotSolution\Admin\IotSolutionAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotSolution\Admin\IotSolutionAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotSolution\Admin\IotSolutionAdminStateRequest;
use DaydreamLab\Cms\Requests\IotSolution\Admin\IotSolutionAdminStoreRequest;
use DaydreamLab\Cms\Resources\IotSolution\Admin\Collections\IotSolutionAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotSolution\Admin\Models\IotSolutionAdminResource;
use DaydreamLab\Cms\Services\IotSolution\Admin\IotSolutionAdminService;
use Throwable;

class IotSolutionAdminController extends CmsController
{
    protected $modelName = 'Solution';

    public function __construct(IotSolutionAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotSolutionAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotSolutionAdminResource::class);
    }


    public function remove(IotSolutionAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotSolutionAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotSolutionAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotSolutionAdminSearchResourceCollection::class);
    }


    public function state(IotSolutionAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotSolutionAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotSolutionAdminResource::class);
    }
}
