<?php

namespace DaydreamLab\Cms\Controllers\Item\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminRemovePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminStorePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminStatePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminSearchPost;

class ItemAdminController extends BaseController
{
    public function __construct(ItemAdminService $service)
    {
        parent::__construct($service);
    }

    public function getItem($id)
    {
        $this->service->find($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ItemAdminRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ItemAdminStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ItemAdminStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ItemAdminSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
