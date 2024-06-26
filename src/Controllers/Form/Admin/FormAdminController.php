<?php

namespace DaydreamLab\Cms\Controllers\Form\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Form\Admin\FormAdminService;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminRemovePost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminStorePost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminStatePost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminSearchPost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminOrderingPost;

class FormAdminController extends BaseController
{
    public function __construct(FormAdminService $service)
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


//    public function ordering(FormAdminOrderingPost $request)
//    {
//        $this->service->ordering($request->rulesInput());
//
//        return ResponseHelper::response($this->service->status, $this->service->response);
//    }


    public function remove(FormAdminRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


//    public function state(FormAdminStatePost $request)
//    {
//        $this->service->state($request->rulesInput());
//
//        return ResponseHelper::response($this->service->status, $this->service->response);
//    }


    public function store(FormAdminStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(FormAdminSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
