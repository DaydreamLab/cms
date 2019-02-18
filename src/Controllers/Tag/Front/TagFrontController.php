<?php

namespace DaydreamLab\Cms\Controllers\Tag\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Tag\Front\TagFrontService;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontRemovePost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontStorePost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontStatePost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontSearchPost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontCheckoutPost;


class TagFrontController extends BaseController
{
    public function __construct(TagFrontService $service)
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


    public function checkout(TagFrontCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(TagFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(TagFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(TagFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(TagFrontSearchPost $input, $title)
    {
        $input = $input->rulesInput()->put('title', $title);

        $this->service->search($input);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
