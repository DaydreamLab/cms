<?php

namespace DaydreamLab\Cms\Controllers\Module\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Module\Front\ModuleFrontService;
use DaydreamLab\Cms\Requests\Module\Front\ModuleFrontRemovePost;
use DaydreamLab\Cms\Requests\Module\Front\ModuleFrontStorePost;
use DaydreamLab\Cms\Requests\Module\Front\ModuleFrontStatePost;
use DaydreamLab\Cms\Requests\Module\Front\ModuleFrontSearchPost;
use DaydreamLab\Cms\Requests\Module\Front\ModuleFrontOrderingPost;
use Symfony\Component\HttpFoundation\Request;


class ModuleFrontController extends BaseController
{
    public function __construct(ModuleFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem($id)
    {
        $this->service->getItem($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItemByAlias(Request $request, $alias)
    {
        $this->service->getItemByAlias(Helper::collect([
            'alias'     =>$alias,
            'language'  => $request->get('language') != '' ? $request->language : config('global.locale')
        ]));

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


    public function ordering(ModuleFrontOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ModuleFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ModuleFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ModuleFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ModuleFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
