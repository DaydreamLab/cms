<?php

namespace DaydreamLab\Cms\Controllers\Site\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminGetItemGet;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminGetListGet;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminRestorePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminStorePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminSearchPost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminStatePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminOrderingPost;
use DaydreamLab\Cms\Resources\Site\Admin\Models\SiteAdminResource;
use DaydreamLab\Cms\Resources\Site\Admin\Collections\SiteAdminListResourceCollection;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminRemovePost;
use Throwable;

class SiteAdminController extends CmsController
{
    protected $modelName = 'Site';

    public function __construct(SiteAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }

    public function getItem(SiteAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [],  SiteAdminResource::class);
    }


    public function getList(SiteAdminGetListGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response->map(function ($item) {
            return $item->only(['id', 'title', 'url']);
        }));
    }


    public function ordering(SiteAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(SiteAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(SiteAdminRestorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(SiteAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], SiteAdminListResourceCollection::class);
    }


    public function state(SiteAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SiteAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [],  SiteAdminResource::class);
    }
}
