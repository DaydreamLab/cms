<?php

namespace DaydreamLab\Cms\Controllers\Item\Front;

use DaydreamLab\Cms\Requests\Item\Front\ItemFrontGetNextPost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontGetPreviousPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontRemovePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontStorePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontStatePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontSearchPost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontCheckoutPost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontFeaturePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontOrderingPost;


class ItemFrontController extends BaseController
{
    public function __construct(ItemFrontService $service)
    {
        parent::__construct($service);
    }


    public function checkout(ItemFrontCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function feature(ItemFrontFeaturePost $request)
    {
        $this->service->feature($request->rulesInput());

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


    public function getNext(ItemFrontGetNextPost $request)
    {
        $this->service->getNext($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getPrevious(ItemFrontGetPreviousPost $request)
    {
        $this->service->getPrevious($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(ItemFrontOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ItemFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ItemFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ItemFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ItemFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
