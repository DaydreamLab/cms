<?php

namespace DaydreamLab\Cms\Controllers\Item\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontGetPreviousAndNextPost;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontRemovePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontStorePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontStatePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontSearchPost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontCheckoutPost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontFeaturePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontOrderingPost;
use Symfony\Component\HttpFoundation\Request;

class ItemFrontController extends CmsController
{
    protected $package = 'Cms';

    protected $modelName = 'Item';

    protected $modelType = 'Front';

    public function __construct(ItemFrontService $service)
    {
        parent::__construct($service);
    }


    public function checkout(ItemFrontCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function feature(ItemFrontFeaturePost $request)
    {
        $this->service->feature($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem($id)
    {
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItemByAlias(Request $request, $alias)
    {
        $this->service->getItemByAlias(Helper::collect([
            'alias'     =>$alias,
            'language'  => $request->get('language') != '' ? $request->language : config('daydreamlab.global.locale')
        ]));

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return $this->response($this->service->status, $this->service->response);
    }


    public function getPreviousAndNext(ItemFrontGetPreviousAndNextPost $request)
    {
        $this->service->getPreviousAndNext($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(ItemFrontOrderingPost $request)
    {
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ItemFrontRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ItemFrontStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ItemFrontStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ItemFrontSearchPost $request)
    {
        $input =
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
