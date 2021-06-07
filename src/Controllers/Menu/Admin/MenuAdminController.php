<?php

namespace DaydreamLab\Cms\Controllers\Menu\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminGetItemGet;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminRestorePost;
use DaydreamLab\Cms\Resources\Menu\Admin\Collections\MenuAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Menu\Admin\Models\MenuAdminResource;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\Cms\Services\Menu\Admin\MenuAdminService;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminRemovePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminStorePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminStatePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminSearchPost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminOrderingPost;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;
use Throwable;

class MenuAdminController extends CmsController
{
    protected $modelName = 'Menu';

    public function __construct(MenuAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(MenuAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], MenuAdminResource::class);
    }


    public function ordering(MenuAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(MenuAdminRemovePost $request)
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


    public function search(MenuAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], MenuAdminListResourceCollection::class);
    }


    public function state(MenuAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(MenuAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], MenuAdminResource::class);
    }
}
