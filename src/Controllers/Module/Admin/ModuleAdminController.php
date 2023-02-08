<?php

namespace DaydreamLab\Cms\Controllers\Module\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminGetItemGet;
use DaydreamLab\Cms\Resources\Module\Admin\Collections\ModuleAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Module\Admin\Models\ModuleAdminResource;
use DaydreamLab\Cms\Services\Module\Admin\ModuleAdminService;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminRemovePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminStorePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminStatePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminSearchPost;

class ModuleAdminController extends CmsController
{
    protected $modelName = 'Module';

    protected $modelType = 'Admin';

    public function __construct(ModuleAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(ModuleAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new ModuleAdminResource($this->service->response));
    }


    public function checkout(ModuleAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ModuleAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ModuleAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ModuleAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
                ? new ModuleAdminResource($this->service->response)
                : $this->service->response
        );
    }


    public function search(ModuleAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status,
            new ModuleAdminListResourceCollection($this->service->response)
        );
    }
}
