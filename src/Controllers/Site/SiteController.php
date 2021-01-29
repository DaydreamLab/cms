<?php

namespace DaydreamLab\Cms\Controllers\Site;

use DaydreamLab\Cms\Requests\Site\SiteCheckoutPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Site\SiteService;
use DaydreamLab\Cms\Requests\Site\SiteOrderingPost;
use DaydreamLab\Cms\Requests\Site\SiteRemovePost;
use DaydreamLab\Cms\Requests\Site\SiteStorePost;
use DaydreamLab\Cms\Requests\Site\SiteStatePost;
use DaydreamLab\Cms\Requests\Site\SiteSearchPost;

class SiteController extends BaseController
{
    public function __construct(SiteService $service)
    {
        parent::__construct($service);
    }


    public function checkout(SiteCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
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


    public function ordering(SiteOrderingPost $request)
    {
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(SiteRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(SiteStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SiteStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(SiteSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
