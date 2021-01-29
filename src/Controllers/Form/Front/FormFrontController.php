<?php

namespace DaydreamLab\Cms\Controllers\Form\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Form\Front\FormFrontService;
use DaydreamLab\Cms\Requests\Form\Front\FormFrontRemovePost;
use DaydreamLab\Cms\Requests\Form\Front\FormFrontStorePost;
use DaydreamLab\Cms\Requests\Form\Front\FormFrontSearchPost;


class FormFrontController extends BaseController
{
    public function __construct(FormFrontService $service)
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


    public function getList()
    {
        $this->service->getList(new Collection());

        return $this->response($this->service->status, $this->service->response);
    }


    public function checkout($id)
    {
        $this->service->checkout($id);

        return $this->response($this->service->status, $this->service->response);
    }


//    public function ordering(FormFrontOrderingPost $request)
//    {
//        $this->service->ordering($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }


    public function remove(FormFrontRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


//    public function state(FormFrontStatePost $request)
//    {
//        $this->service->state($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }


    public function store(FormFrontStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(FormFrontSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
