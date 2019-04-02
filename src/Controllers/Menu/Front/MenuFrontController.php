<?php

namespace DaydreamLab\Cms\Controllers\Menu\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Menu\Front\MenuFrontService;
use DaydreamLab\Cms\Requests\Menu\Front\MenuFrontRemovePost;
use DaydreamLab\Cms\Requests\Menu\Front\MenuFrontStorePost;
use DaydreamLab\Cms\Requests\Menu\Front\MenuFrontStatePost;
use DaydreamLab\Cms\Requests\Menu\Front\MenuFrontSearchPost;
use DaydreamLab\Cms\Requests\Menu\Front\MenuFrontOrderingPost;
use Symfony\Component\HttpFoundation\Request;


class MenuFrontController extends BaseController
{
    public function __construct(MenuFrontService $service)
    {
        parent::__construct($service);
    }


    public function getItem(Request $request, $alias)
    {
        $menu = $this->service->getMenu(Helper::collect([
            'alias' => $alias,
            'host'  => $request->getHttpHost(),
            'sef'   => $request->sef
        ]));

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getTree(Request $request)
    {
        $this->service->getTree(Helper::collect([
            'host'  => $request->getHttpHost(),
            'sef'   => $request->sef
        ]));

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function checkout($id)
    {
        $this->service->checkout($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(MenuFrontOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(MenuFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(MenuFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(MenuFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(MenuFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
