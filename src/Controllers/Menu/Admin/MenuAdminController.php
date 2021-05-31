<?php

namespace DaydreamLab\Cms\Controllers\Menu\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminGetItemGet;
use DaydreamLab\Cms\Resources\Menu\Admin\Collections\MenuAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Menu\Admin\Models\MenuAdminResource;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\Cms\Services\Menu\Admin\MenuAdminService;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminRemovePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminStorePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminStatePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminSearchPost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminOrderingPost;
use Throwable;

class MenuAdminController extends CmsController
{
    protected $modelName = 'Menu';

    protected $modelType = 'Admin';

    public function __construct(MenuAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(MenuAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {

        } catch (Throwable $t) {
            $this->handleException($t);
        }
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new MenuAdminResource($this->service->response));
    }


    public function checkout(MenuAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->checkout($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
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
        $validated = $request->validated();
        if (!$validated->get('host')) {
            $validated->put('host', $request->getHttpHost());
        }
        $this->service->setUser($request->user('api'));
        $this->service->store($validated);

        try {

        } catch (Throwable $t) {
            $this->handleException($t);
        }


        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
                ? new MenuAdminResource($this->service->response->refresh())
                : $this->service->response
        );
    }


    public function search(MenuAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, new MenuAdminListResourceCollection($this->service->response));
    }
}
