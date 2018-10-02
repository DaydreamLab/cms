<?php

namespace DaydreamLab\Cms\Controllers\Item;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Item\ItemTagMapService;
use DaydreamLab\Cms\Requests\Item\DummyOrderingPostRequest;
use DaydreamLab\Cms\Requests\Item\ItemTagMapRemovePost;
use DaydreamLab\Cms\Requests\Item\ItemTagMapStorePost;
use DaydreamLab\Cms\Requests\Item\ItemTagMapStatePost;
use DaydreamLab\Cms\Requests\Item\ItemTagMapSearchPost;

class ItemTagMapController extends BaseController
{
    public function __construct(ItemTagMapService $service)
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


    public function remove(ItemTagMapRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ItemTagMapStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ItemTagMapStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ItemTagMapSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
