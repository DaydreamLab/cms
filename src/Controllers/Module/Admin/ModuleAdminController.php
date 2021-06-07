<?php

namespace DaydreamLab\Cms\Controllers\Module\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminGetItemGet;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminRestorePost;
use DaydreamLab\Cms\Resources\Module\Admin\Collections\ModuleAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Module\Admin\Models\ModuleAdminResource;
use DaydreamLab\Cms\Services\Module\Admin\ModuleAdminService;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminRemovePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminStorePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminStatePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminSearchPost;
use Throwable;

class ModuleAdminController extends CmsController
{
    protected $modelName = 'Module';

    public function __construct(ModuleAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(ModuleAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ModuleAdminResource::class);
    }


    public function remove(ModuleAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ModuleAdminRestorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ModuleAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ModuleAdminListResourceCollection::class);
    }


    public function state(ModuleAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ModuleAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ModuleAdminResource::class);
    }
}
