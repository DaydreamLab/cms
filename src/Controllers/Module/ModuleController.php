<?php

namespace DaydreamLab\Cms\Controllers\Module;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\Cms\Requests\Module\ModuleOrderingPost;
use DaydreamLab\Cms\Requests\Module\ModuleRemovePost;
use DaydreamLab\Cms\Requests\Module\ModuleStorePost;
use DaydreamLab\Cms\Requests\Module\ModuleStatePost;
use DaydreamLab\Cms\Requests\Module\ModuleSearchPost;

class ModuleController extends BaseController
{
    public function __construct(ModuleService $service)
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


    public function ordering(ModuleOrderingPost $request)
    {
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ModuleRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ModuleStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ModuleStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ModuleSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
