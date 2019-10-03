<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Admin;

use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldAdminCheckoutPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldAdminService;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminSearchPost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminOrderingPost;

class ExtrafieldAdminController extends BaseController
{
    public function __construct(ExtrafieldAdminService $service)
    {
        parent::__construct($service);
    }

    public function getItem($id)
    {
        $this->service->canAction('getExtrafield');
        $this->service->getItem($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function checkout(ExtrafieldAdminCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(ExtrafieldAdminOrderingPost $request)
    {
        $this->service->canAction('editExtrafield');
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ExtrafieldAdminRemovePost $request)
    {
        $this->service->canAction('deleteExtrafield');
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldAdminStatePost $request)
    {
        $this->service->canAction('updateExtrafieldState');
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldAdminStorePost $request)
    {
        InputHelper::null($request->rulesInput(), 'id') ? $this->service->canAction('addExtrafield')
            : $this->service->canAction('editExtrafield');
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldAdminSearchPost $request)
    {
        $this->service->canAction('searchExtrafield');
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
