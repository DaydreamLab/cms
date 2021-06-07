<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminGetItemGet;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminRestorePost;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Collections\ExtrafieldAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Models\ExtrafieldAdminResource;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldAdminService;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminSearchPost;
use Throwable;

class ExtrafieldAdminController extends CmsController
{
    protected $modelName = 'Extrafield';

    public function __construct(ExtrafieldAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(ExtrafieldAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ExtrafieldAdminResource::class);
    }


    public function remove(ExtrafieldAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ExtrafieldAdminRestorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ExtrafieldAdminListResourceCollection::class);
    }


    public function state(ExtrafieldAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ExtrafieldAdminResource::class);
    }
}
