<?php

namespace DaydreamLab\Cms\Controllers\Menu\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Menu\Admin\MenuAdminService;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminRemovePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminStorePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminStatePost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminSearchPost;
use DaydreamLab\Cms\Requests\Menu\Admin\MenuAdminOrderingPost;

class MenuAdminController extends BaseController
{
    public function __construct(MenuAdminService $service)
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


    public function checkout(MenuAdminRemovePost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(MenuAdminOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(MenuAdminRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(MenuAdminStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(MenuAdminStorePost $request)
    {
        $input = $request->rulesInput();
        if (InputHelper::null($input, 'host'))
        {
            $input->put('host', $request->getHttpHost());
        }

        $this->service->store($input);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(MenuAdminSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }

}
