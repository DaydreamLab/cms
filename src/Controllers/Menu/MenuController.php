<?php

namespace DaydreamLab\Cms\Controllers\Menu;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\Cms\Requests\Menu\MenuOrderingPost;
use DaydreamLab\Cms\Requests\Menu\MenuRemovePost;
use DaydreamLab\Cms\Requests\Menu\MenuStorePost;
use DaydreamLab\Cms\Requests\Menu\MenuStatePost;
use DaydreamLab\Cms\Requests\Menu\MenuSearchPost;

class MenuController extends BaseController
{
    public function __construct(MenuService $service)
    {
        parent::__construct($service);
    }


    public function getItem($id)
    {
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return $this->response($this->service->status, $this->service->response);
    }


    public function checkout($id)
    {
        $this->service->checkout($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(MenuOrderingPost $request)
    {
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(MenuRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(MenuStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(MenuStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(MenuSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
