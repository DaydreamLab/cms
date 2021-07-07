<?php

namespace DaydreamLab\Cms\Controllers\ProductCategory\Admin;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminGetItemRequest;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminSearchRequest;
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
