<?php

namespace DaydreamLab\Cms\Controllers\Category\Admin;

use DaydreamLab\Cms\Requests\Item\Admin\CategoryAdminOrderingPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminRemovePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminStorePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminStatePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminSearchPost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminCheckoutPost;

class CategoryAdminController extends BaseController
{
    public function __construct(CategoryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }

    public function getItem($id)
    {
        $this->service->getItem($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function checkout(CategoryAdminCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(CategoryAdminOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(CategoryAdminRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(CategoryAdminStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(CategoryAdminStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(CategoryAdminSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function tree($extension = 'item')
    {
        $this->service->tree($extension);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function treeList($extension = 'item')
    {
        $this->service->treeList($extension);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function unlock($id)
    {
        $this->service->unlock($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
