<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminRestorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminGetItemGet;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Collections\ExtrafieldGroupAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Models\ExtrafieldGroupAdminResource;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminSearchPost;
use Throwable;

class ExtrafieldGroupAdminController extends CmsController
{
    protected $modelName = 'ExtrafieldGroup';

    public function __construct(ExtrafieldGroupAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(ExtrafieldGroupAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ExtrafieldGroupAdminResource::class);
    }


    public function remove(ExtrafieldGroupAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ExtrafieldGroupAdminRestorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldGroupAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ExtrafieldGroupAdminListResourceCollection::class);
    }


    public function state(ExtrafieldGroupAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldGroupAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ExtrafieldGroupAdminResource::class);
    }
}
