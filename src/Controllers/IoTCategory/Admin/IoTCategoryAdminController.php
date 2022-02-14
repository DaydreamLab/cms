<?php

namespace DaydreamLab\Cms\Controllers\IoTCategory\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IoTCategory\Admin\IoTCategoryAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Admin\IoTCategoryAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Admin\IoTCategoryAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Admin\IoTCategoryAdminSearchRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Admin\IoTCategoryAdminStateRequest;
use DaydreamLab\Cms\Requests\IoTCategory\Admin\IoTCategoryAdminStoreRequest;
use DaydreamLab\Cms\Services\IoTCategory\Admin\IoTCategoryAdminService;
use Throwable;

class IoTCategoryAdminController extends CmsController
{
    protected $modelName = 'IoTCategory';

    public function __construct(IoTCategoryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IoTCategoryAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(IoTCategoryAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IoTCategoryAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IoTCategoryAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(IoTCategoryAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IoTCategoryAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
