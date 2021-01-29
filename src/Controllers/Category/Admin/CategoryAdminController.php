<?php

namespace DaydreamLab\Cms\Controllers\Category\Admin;

use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminGetItem;
use DaydreamLab\Cms\Requests\Item\Admin\CategoryAdminOrderingPost;
use DaydreamLab\Cms\Resources\Category\Admin\Collections\CategoryAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminResource;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminRemovePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminStorePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminStatePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminSearchPost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminCheckoutPost;
use DaydreamLab\JJAJ\Helpers\Helper;

class CategoryAdminController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Category';

    protected $modelType = 'Admin';

    public function __construct(CategoryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(CategoryAdminGetItem $request)
    {
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new CategoryAdminResource($this->service->response));
    }


    public function checkout(CategoryAdminCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(CategoryAdminOrderingPost $request)
    {
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(CategoryAdminRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(CategoryAdminStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(CategoryAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
                ? new CategoryAdminResource($this->service->response)
                : null
        );
    }


    public function search(CategoryAdminSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status,
            new CategoryAdminListResourceCollection($this->service->response)
        );
    }


    public function tree($extension = 'item')
    {
        $this->service->tree($extension);

        return $this->response($this->service->status, $this->service->response);
    }


    public function treeList($extension = 'item')
    {
        $this->service->treeList($extension);

        return $this->response($this->service->status, $this->service->response);
    }
}
