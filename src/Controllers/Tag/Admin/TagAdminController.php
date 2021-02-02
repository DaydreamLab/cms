<?php

namespace DaydreamLab\Cms\Controllers\Tag\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
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
use DaydreamLab\JJAJ\Helpers\Helper;


class TagAdminController extends CmsController
{
    protected $modelName = 'Tag';

    protected $modelType = 'Admin';

    public function __construct(TagAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(TagAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new TagAdminResource($this->service->response));
    }


    public function store(TagAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object' ? new TagAdminResource($this->service->response->refresh()) : null);
    }


    public function state(TagAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(TagAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(TagAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, new TagAdminListResourceCollection($this->service->response));
    }

    
    public function checkout(TagAdminCheckoutPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(TagAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }

}
