<?php

namespace DaydreamLab\Cms\Controllers\Pagebuilder\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Pagebuilder\Admin\PagebuilderAdminService;
use DaydreamLab\Cms\Requests\Pagebuilder\Admin\PagebuilderAdminRemovePost;
use DaydreamLab\Cms\Requests\Pagebuilder\Admin\PagebuilderAdminStorePost;
use DaydreamLab\Cms\Requests\Pagebuilder\Admin\PagebuilderAdminStatePost;
use DaydreamLab\Cms\Requests\Pagebuilder\Admin\PagebuilderAdminSearchPost;

class PagebuilderAdminController extends BaseController
{
    public function __construct(PagebuilderAdminService $service)
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


    public function remove(PagebuilderAdminRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(PagebuilderAdminStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(PagebuilderAdminStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(PagebuilderAdminSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
