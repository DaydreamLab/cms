<?php

namespace DaydreamLab\Cms\Controllers\Pagebuilder\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Pagebuilder\Front\PagebuilderFrontService;
use DaydreamLab\Cms\Requests\Pagebuilder\Front\PagebuilderFrontRemovePost;
use DaydreamLab\Cms\Requests\Pagebuilder\Front\PagebuilderFrontStorePost;
use DaydreamLab\Cms\Requests\Pagebuilder\Front\PagebuilderFrontStatePost;
use DaydreamLab\Cms\Requests\Pagebuilder\Front\PagebuilderFrontSearchPost;


class PagebuilderFrontController extends BaseController
{
    public function __construct(PagebuilderFrontService $service)
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


    public function remove(PagebuilderFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(PagebuilderFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(PagebuilderFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(PagebuilderFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
