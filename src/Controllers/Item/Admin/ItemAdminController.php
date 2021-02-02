<?php

namespace DaydreamLab\Cms\Controllers\Item\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminGetItemGet;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminRemovePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminStorePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminStatePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminSearchPost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminCheckoutPost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminFeaturePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminOrderingPost;

class ItemAdminController extends CmsController
{
    protected $modelName = 'Item';

    protected $modelType = 'Admin';

    public function __construct(ItemAdminService $service)
    {
        parent::__construct($service);
    }


    public function checkout(ItemAdminCheckoutPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function featured(ItemAdminFeaturePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->featured($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(ItemAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(ItemAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(ItemAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ItemAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ItemAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ItemAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ItemAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
