<?php

namespace DaydreamLab\Cms\Controllers\Form\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Form\Admin\FormAdminService;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminRemovePost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminStorePost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminSearchPost;

class FormAdminController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Form';

    protected $modelType = 'Admin';

    public function __construct(FormAdminService $service)
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


//    public function ordering(FormAdminOrderingPost $request)
//    {
//        $this->service->ordering($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }


    public function remove(FormAdminRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


//    public function state(FormAdminStatePost $request)
//    {
//        $this->service->state($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }


    public function store(FormAdminStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(FormAdminSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
