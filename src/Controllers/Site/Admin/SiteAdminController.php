<?php

namespace DaydreamLab\Cms\Controllers\Site\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminGetItemGet;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminGetListGet;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminCheckoutPost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminStorePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminSearchPost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminStatePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminOrderingPost;
use DaydreamLab\Cms\Resources\Site\Admin\Models\SiteAdminResource;
use DaydreamLab\Cms\Resources\Site\Admin\Collections\SiteAdminListResourceCollection;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminRemovePost;


class SiteAdminController extends CmsController
{
    protected $modelName = 'Site';

    protected $modelType = 'Admin';


    public function __construct(SiteAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(SiteAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new SiteAdminResource($this->service->response));
    }

    public function getList(SiteAdminGetListGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getList(collect());

        return $this->response($this->service->status, $this->service->response);
    }


    public function checkout(SiteAdminCheckoutPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SiteAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
                ? new SiteAdminResource($this->service->response->refresh())
                : null
        );
    }


    public function search(SiteAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, new SiteAdminListResourceCollection($this->service->response));
    }


    public function state(SiteAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(SiteAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(SiteAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
    
}
