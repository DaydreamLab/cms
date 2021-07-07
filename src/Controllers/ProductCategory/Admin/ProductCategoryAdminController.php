<?php

namespace DaydreamLab\Cms\Controllers\ProductCategory\Admin;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Requests\ProductCategory\Admin\ProductCategoryAdminSearchRequest;
use DaydreamLab\Cms\Resources\ProductCategory\Admin\Collections\ProductCategoryAdminListResourceCollection;
use DaydreamLab\Cms\Services\cmsService;

class ProductCategoryAdminController extends cmsController
{
    protected $modelName = 'ProductCategory';

    public function __construct(cmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
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
}
