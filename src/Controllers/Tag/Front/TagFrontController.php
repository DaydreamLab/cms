<?php

namespace DaydreamLab\Cms\Controllers\Tag\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Tag\Front\TagFrontService;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontRemovePost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontStorePost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontStatePost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontSearchPost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontCheckoutPost;

class TagFrontController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Tag';

    protected $modelType = 'Front';

    public function __construct(TagFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
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


    public function getItemByAlias($alias)
    {
        $this->service->getItemByAlias(Helper::collect(['alias'=>$alias]));

        return $this->response($this->service->status, $this->service->response);
    }


    public function checkout(TagFrontCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(TagFrontRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(TagFrontStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(TagFrontStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(TagFrontSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function searchItems(TagFrontSearchPost $request)
    {
        $this->service->searchItems($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
