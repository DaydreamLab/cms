<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminCheckoutPost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminGetItemGet;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Collections\ExtrafieldGroupAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Models\ExtrafieldGroupAdminResource;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminSearchPost;

class ExtrafieldGroupAdminController extends CmsController
{
    protected $modelName = 'ExtrafieldGroup';

    protected $modelType = 'Admin';

    public function __construct(ExtrafieldGroupAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function checkout(ExtrafieldGroupAdminCheckoutPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(ExtrafieldGroupAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new ExtrafieldGroupAdminResource($this->service->response));
    }


    public function remove(ExtrafieldGroupAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldGroupAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldGroupAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
            ? new ExtrafieldGroupAdminResource($this->service->response)
            : $this->service->response
        );
    }


    public function search(ExtrafieldGroupAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, new ExtrafieldGroupAdminListResourceCollection($this->service->response));
    }
}
