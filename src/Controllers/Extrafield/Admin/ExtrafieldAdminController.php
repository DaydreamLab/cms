<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminGetItemGet;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminCheckoutPost;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Collections\ExtrafieldAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Extrafield\Admin\Models\ExtrafieldAdminResource;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldAdminService;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldAdminSearchPost;

class ExtrafieldAdminController extends CmsController
{
    protected $modelName = 'Extrafield';

    protected $modelType = 'Admin';

    public function __construct(ExtrafieldAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function checkout(ExtrafieldAdminCheckoutPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(ExtrafieldAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new ExtrafieldAdminResource($this->service->response));
    }


    public function remove(ExtrafieldAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
            ? new ExtrafieldAdminResource($this->service->response->refresh())
            : $this->service->response
        );
    }


    public function search(ExtrafieldAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, new ExtrafieldAdminListResourceCollection($this->service->response));
    }
}
