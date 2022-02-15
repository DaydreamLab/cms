<?php

namespace DaydreamLab\Cms\Controllers\IotCategory\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminStateRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminStoreRequest;
use DaydreamLab\Cms\Services\IotCategory\Admin\IotCategoryAdminService;
use Throwable;

class IotCategoryAdminController extends CmsController
{
    protected $modelName = 'IotCategory';

    public function __construct(IotCategoryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotCategoryAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(IotCategoryAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotCategoryAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotCategoryAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(IotCategoryAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotCategoryAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
