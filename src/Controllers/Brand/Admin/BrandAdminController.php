<?php

namespace DaydreamLab\Cms\Controllers\Brand\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Resources\Brand\Admin\Models\BrandAdminResource;
use DaydreamLab\Cms\Requests\Brand\Admin\BrandAdminStoreRequest;
use DaydreamLab\Cms\Services\CmsService;

class BrandAdminController extends CmsController
{
    protected $modelName = 'Brand';

    public function __construct(CmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function store(BrandAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], BrandAdminResource::class);
    }
}
