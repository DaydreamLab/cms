<?php

namespace DaydreamLab\Cms\Controllers\ProductCategory\Admin;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminGetItemRequest;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminRemoveRequest;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminRestoreRequest;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminSearchRequest;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminStateRequest;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminStoreRequest;
use DaydreamLab\Cms\Resources\ProductCategory\Admin\Collections\ProductCategoryAdminListResourceCollection;
use DaydreamLab\Cms\Resources\ProductCategory\Admin\Models\ProductCategoryAdminResource;
use DaydreamLab\Cms\Services\ProductCategory\Admin\ProductCategoryAdminService;

class ProductCategoryAdminController extends cmsController
{
    protected $modelName = 'ProductCategory';

    public function __construct(ProductCategoryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(ProductCategoryAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ProductCategoryAdminResource::class);
    }


    public function remove(ProductCategoryAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ProductCategoryAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ProductCategoryAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ProductCategoryAdminListResourceCollection::class);
    }


    public function state(ProductCategoryAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ProductCategoryAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ProductCategoryAdminResource::class);
    }
}
