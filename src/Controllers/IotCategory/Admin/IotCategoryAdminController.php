<?php

namespace DaydreamLab\Cms\Controllers\IotCategory\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminStateRequest;
use DaydreamLab\Cms\Requests\IotCategory\Admin\IotCategoryAdminStoreRequest;
use DaydreamLab\Cms\Resources\IotCategory\Admin\Collections\IotCategoryAdminSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotCategory\Admin\Models\IotCategoryAdminResource;
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
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotCategoryAdminResource::class);
    }


    public function remove(IotCategoryAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotCategoryAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotCategoryAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotCategoryAdminSearchResourceCollection::class);
    }


    public function searchParent(IotCategoryAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchParent($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotCategoryAdminSearchResourceCollection::class);
    }


    public function searchChild(IotCategoryAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchChild($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotCategoryAdminSearchResourceCollection::class);
    }


    public function state(IotCategoryAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotCategoryAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotCategoryAdminResource::class);
    }

    public function storeParent(IotCategoryAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->storeParent($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotCategoryAdminResource::class);
    }

    public function storeChild(IotCategoryAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->storeChild($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotCategoryAdminResource::class);
    }
}
