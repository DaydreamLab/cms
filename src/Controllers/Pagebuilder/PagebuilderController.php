<?php

namespace DaydreamLab\Cms\Controllers\Pagebuilder;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Pagebuilder\PagebuilderService;
use DaydreamLab\Cms\Requests\Pagebuilder\PagebuilderRemovePost;
use DaydreamLab\Cms\Requests\Pagebuilder\PagebuilderStorePost;
use DaydreamLab\Cms\Requests\Pagebuilder\PagebuilderStatePost;
use DaydreamLab\Cms\Requests\Pagebuilder\PagebuilderSearchPost;

class PagebuilderController extends BaseController
{
    public function __construct(PagebuilderService $service)
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


    public function remove(PagebuilderRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(PagebuilderStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(PagebuilderStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(PagebuilderSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
