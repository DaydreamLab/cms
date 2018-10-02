<?php

namespace DaydreamLab\Cms\Controllers\Item\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Item\Front\ItemTagMapFrontService;
use DaydreamLab\Cms\Requests\Item\Front\ItemTagMapFrontRemovePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemTagMapFrontStorePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemTagMapFrontStatePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemTagMapFrontSearchPost;
use DaydreamLab\Cms\Requests\Item\Front\DummyOrderingPostRequest;


class ItemTagMapFrontController extends BaseController
{
    public function __construct(ItemTagMapFrontService $service)
    {
        parent::__construct($service);
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


    public function checkout($id)
    {
        $this->service->checkout($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(DummyOrderingPostRequest $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ItemTagMapFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ItemTagMapFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ItemTagMapFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ItemTagMapFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
