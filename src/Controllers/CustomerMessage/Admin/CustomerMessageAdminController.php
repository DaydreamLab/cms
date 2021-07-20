<?php

namespace DaydreamLab\Cms\Controllers\CustomerMessage\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\CustomerMessage\Admin\CustomerMessageAdminGetItemRequest;
use DaydreamLab\Cms\Requests\CustomerMessage\Admin\CustomerMessageAdminRestoreRequest;
use DaydreamLab\Cms\Requests\CustomerMessage\Admin\CustomerMessageAdminSearchRequest;
use DaydreamLab\Cms\Requests\CustomerMessage\Admin\CustomerMessageAdminStoreRequest;
use DaydreamLab\Cms\Resources\CustomerMessage\Admin\Collections\CustomerMessageAdminListResourceCollection;
use DaydreamLab\Cms\Resources\CustomerMessage\Admin\Models\CustomerMessageAdminResource;
use DaydreamLab\Cms\Services\CustomerMessage\Admin\CustomerMessageAdminService;
use Throwable;

class CustomerMessageAdminController extends CmsController
{
    protected $modelName = 'CustomerMessage';

    public function __construct(CustomerMessageAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(CustomerMessageAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CustomerMessageAdminResource::class);
    }


    public function restore(CustomerMessageAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(CustomerMessageAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CustomerMessageAdminListResourceCollection::class);
    }


    public function store(CustomerMessageAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CustomerMessageAdminResource::class);
    }
}
