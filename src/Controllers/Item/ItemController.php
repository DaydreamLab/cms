<?php

namespace DaydreamLab\Cms\Controllers\Item;

use DaydreamLab\Cms\Requests\Item\ItemCheckoutPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\Cms\Requests\Item\ItemRemovePost;
use DaydreamLab\Cms\Requests\Item\ItemStorePost;
use DaydreamLab\Cms\Requests\Item\ItemStatePost;
use DaydreamLab\Cms\Requests\Item\ItemSearchPost;

use DaydreamLab\Cms\Requests\Item\ItemFeaturePost;
use DaydreamLab\Cms\Requests\Item\ItemOrderingPost;


class ItemController extends BaseController
{
    public function __construct(ItemService $service)
    {
        parent::__construct($service);
    }


    public function checkout(ItemCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function featured(ItemFeaturePost $request)
    {
        $this->service->featured($request->rulesInput());

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


    public function ordering(ItemOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ItemRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ItemStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ItemStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ItemSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
