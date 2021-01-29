<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Admin;

use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldGroupAdminCheckoutPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminSearchPost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminOrderingPost;

class ExtrafieldGroupAdminController extends BaseController
{
    public function __construct(ExtrafieldGroupAdminService $service)
    {
        parent::__construct($service);
    }

    public function getItem($id)
    {
        $this->service->canAction('getExtrafieldGroup');
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function checkout(ExtrafieldGroupAdminCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(ExtrafieldGroupAdminOrderingPost $request)
    {
        $this->service->canAction('editExtrafieldGroup');
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ExtrafieldGroupAdminRemovePost $request)
    {
        $this->service->canAction('deleteExtrafieldGroup');
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldGroupAdminStatePost $request)
    {
        $this->service->canAction('updateExtrafieldGroupState');
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldGroupAdminStorePost $request)
    {
        InputHelper::null($request->validated(), 'id') ? $this->service->canAction('addExtrafieldGroup')
            : $this->service->canAction('editExtrafieldGroup');
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldGroupAdminSearchPost $request)
    {
        $this->service->canAction('searchExtrafieldGroup');
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
