<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Extrafield\Front\ExtrafieldGroupFrontService;


class ExtrafieldGroupFrontController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'ExtrafieldGroup';

    protected $modelType = 'Front';

    public function __construct(ExtrafieldGroupFrontService $service)
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


//    public function ordering(ExtrafieldGroupFrontOrderingPost $request)
//    {
//        $this->service->ordering($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }
//
//
//    public function remove(ExtrafieldGroupFrontRemovePost $request)
//    {
//        $this->service->remove($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }
//
//
//    public function state(ExtrafieldGroupFrontStatePost $request)
//    {
//        $this->service->state($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }
//
//
//    public function store(ExtrafieldGroupFrontStorePost $request)
//    {
//        $this->service->store($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }
//
//
//    public function search(ExtrafieldGroupFrontSearchPost $request)
//    {
//        $this->service->search($request->validated());
//
//        return $this->response($this->service->status, $this->service->response);
//    }
}
