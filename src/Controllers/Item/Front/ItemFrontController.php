<?php

namespace DaydreamLab\Cms\Controllers\Item\Front;

use DaydreamLab\Cms\Requests\Item\Front\ItemFrontDownloadPost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontGetPreviousAndNextPost;
use DaydreamLab\Cms\Resources\Items\Front\Collections\SearchResourceCollection;
use DaydreamLab\Cms\Resources\Items\Front\Models\ItemResource;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
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


class ItemFrontController extends BaseController
{
    public function __construct(ItemFrontService $service)
    {
        parent::__construct($service);
    }


    public function checkout(ItemFrontCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function feature(ItemFrontFeaturePost $request)
    {
        $this->service->feature($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItem($id)
    {
        $this->service->getItem($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItemByAlias(Request $request, $alias)
    {
        $this->service->getItemByAlias(Helper::collect([
            'alias'     =>$alias,
            'language'  => $request->get('language') != '' ? $request->language : config('global.locale')
        ]));

        return ResponseHelper::response(
            $this->service->status,
            ItemResource::make($this->service->response)
        );
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getPreviousAndNext(ItemFrontGetPreviousAndNextPost $request)
    {
        $this->service->getPreviousAndNext($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(ItemFrontOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ItemFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ItemFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ItemFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ItemFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status,
            SearchResourceCollection::make($this->service->response)
        );
    }

    public function download($alias, ItemFrontDownloadPost $request)
    {
        $input = $request->rulesInput();
        $input->put('alias', $alias);
        return $this->service->download($input);
    }
}
