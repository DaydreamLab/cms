<?php

namespace DaydreamLab\Cms\Controllers\Tag;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Tag\TagService;
use DaydreamLab\Cms\Requests\Tag\TagRemovePost;
use DaydreamLab\Cms\Requests\Tag\TagStorePost;
use DaydreamLab\Cms\Requests\Tag\TagStatePost;
use DaydreamLab\Cms\Requests\Tag\TagSearchPost;
use DaydreamLab\Cms\Requests\Tag\TagCheckoutPost;

class TagController extends BaseController
{
    public function __construct(TagService $service)
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


    public function checkout(TagCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(TagRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(TagStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(TagStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(TagSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
