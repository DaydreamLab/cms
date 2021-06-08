<?php

namespace DaydreamLab\Cms\Controllers\Category\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminFeaturedOrderingPost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminFeaturedPost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminGetItemGet;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminOrderingNestedPost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminRemovePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminRestorePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminStatePost;
use DaydreamLab\Cms\Resources\Category\Admin\Collections\CategoryAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminResource;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminStorePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminSearchPost;
use Throwable;

class CategoryAdminController extends CmsController
{
    protected $modelName = 'Category';

    public function __construct(CategoryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(CategoryAdminFeaturedPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(CategoryAdminFeaturedOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(CategoryAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CategoryAdminResource::class);
    }


    public function ordering(CategoryAdminOrderingNestedPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(CategoryAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(CategoryAdminRestorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(CategoryAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CategoryAdminListResourceCollection::class);
    }


    public function state(CategoryAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(CategoryAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CategoryAdminResource::class);
    }
}
