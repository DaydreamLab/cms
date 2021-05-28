<?php

namespace DaydreamLab\Cms\Controllers\Tag\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminFeaturedPost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminGetItemGet;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminStorePost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminStatePost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminSearchPost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminRemovePost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminCheckoutPost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminOrderingPost;
use DaydreamLab\Cms\Resources\Tag\Admin\Models\TagAdminResource;
use DaydreamLab\Cms\Resources\Tag\Admin\Collections\TagAdminListResourceCollection;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use Throwable;

class TagAdminController extends CmsController
{
    protected $modelName = 'Tag';

    protected $modelType = 'Admin';

    public function __construct(TagAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function featured(TagAdminFeaturedPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(TagAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TagAdminResource::class);
    }


    public function ordering(TagAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->modify($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(TagAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(TagAdminCheckoutPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(TagAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TagAdminListResourceCollection::class);
    }


    public function state(TagAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(TagAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TagAdminResource::class);
    }
}
