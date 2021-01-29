<?php

namespace DaydreamLab\Cms\Controllers\Extrafield;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldOrderingPost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldStorePost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldStatePost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldSearchPost;

class ExtrafieldController extends BaseController
{
    public function __construct(ExtrafieldService $service)
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


    public function ordering(ExtrafieldOrderingPost $request)
    {
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ExtrafieldRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
