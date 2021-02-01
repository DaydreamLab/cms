<?php

namespace DaydreamLab\Cms\Controllers\Category\Admin;

use DaydreamLab\Cms\Requests\CmsCheckoutRemovePost;
use DaydreamLab\Cms\Requests\CmsGetItemGet;
use DaydreamLab\Cms\Requests\CmsOrderingPost;
use DaydreamLab\Cms\Requests\CmStatePost;
use DaydreamLab\Cms\Resources\Category\Admin\Collections\CategoryAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminResource;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminStorePost;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminSearchPost;
use Illuminate\Support\Facades\DB;

class CategoryAdminController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Category';

    protected $modelType = 'Admin';

    public function __construct(CategoryAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(CmsGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new CategoryAdminResource($this->service->response));
    }


    public function checkout(CmsCheckoutRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(CmsOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        $v = $request->validated();
        DB::transaction(function () use ($v) {
            $this->service->ordering($v);
        });

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(CmsCheckoutRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(CmStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(CategoryAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
                ? new CategoryAdminResource($this->service->response->refresh())
                : null
        );
    }


    public function search(CategoryAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status,
            new CategoryAdminListResourceCollection($this->service->response)
        );
    }
}
