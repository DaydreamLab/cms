<?php

namespace DaydreamLab\Cms\Controllers\Category\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontRemovePost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontStorePost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontStatePost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontSearchPost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontCheckoutPost;


class CategoryFrontController extends BaseController
{
    public function __construct(CategoryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getSubcategories($alias)
    {
        $this->service->getSubcategories(Helper::collect(['alias'=>$alias]));

        return ResponseHelper::response($this->service->status, $this->service->response);
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


    public function checkout(CategoryFrontCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItemByAlias($alias)
    {
        $this->service->getItemByAlias(Helper::collect(['alias'=>$alias]));

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(CategoryFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(CategoryFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(CategoryFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(CategoryFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function searchItems(CategoryFrontSearchPost $request)
    {
        $this->service->searchItems($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
