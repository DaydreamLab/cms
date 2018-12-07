<?php

namespace DaydreamLab\Cms\Controllers\Form;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Form\FormService;
use DaydreamLab\Cms\Requests\Form\FormOrderingPost;
use DaydreamLab\Cms\Requests\Form\FormRemovePost;
use DaydreamLab\Cms\Requests\Form\FormStorePost;
use DaydreamLab\Cms\Requests\Form\FormStatePost;
use DaydreamLab\Cms\Requests\Form\FormSearchPost;

class FormController extends BaseController
{
    public function __construct(FormService $service)
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


    public function getList()
    {
        $this->service->getList(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function checkout($id)
    {
        $this->service->checkout($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


//    public function ordering(FormOrderingPost $request)
//    {
//        $this->service->ordering($request->rulesInput());
//
//        return ResponseHelper::response($this->service->status, $this->service->response);
//    }


    public function remove(FormRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


//    public function state(FormStatePost $request)
//    {
//        $this->service->state($request->rulesInput());
//
//        return ResponseHelper::response($this->service->status, $this->service->response);
//    }


    public function store(FormStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(FormSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
