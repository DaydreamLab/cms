<?php

namespace DaydreamLab\Cms\Controllers\Brand\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Brand\Admin\BrandAdminGetItemRequest;
use DaydreamLab\Cms\Requests\Brand\Admin\BrandAdminRemoveRequest;
use DaydreamLab\Cms\Requests\Brand\Admin\BrandAdminRestoreRequest;
use DaydreamLab\Cms\Requests\Brand\Admin\BrandAdminSearchRequest;
use DaydreamLab\Cms\Requests\Brand\Admin\BrandAdminStateRequest;
use DaydreamLab\Cms\Requests\Brand\Admin\BrandAdminStoreRequest;
use DaydreamLab\Cms\Resources\Brand\Admin\Collections\BrandAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Brand\Admin\Models\BrandAdminResource;
use DaydreamLab\Cms\Services\Brand\Admin\BrandAdminService;
use Illuminate\Http\Request;
use Throwable;

class BrandAdminController extends CmsController
{
    protected $modelName = 'Brand';

    public function __construct(BrandAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(BrandAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], BrandAdminResource::class);
    }


    public function import(Request $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->import($request);
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(BrandAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(BrandAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(BrandAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], BrandAdminListResourceCollection::class);
    }


    public function state(BrandAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
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
