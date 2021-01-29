<?php

namespace DaydreamLab\Cms\Controllers\Site\Admin;

use DaydreamLab\Cms\Requests\Site\SiteCheckoutPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminRemovePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminStorePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminStatePost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminSearchPost;
use DaydreamLab\Cms\Requests\Site\Admin\SiteAdminOrderingPost;

class SiteAdminController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Site';

    protected $modelType = 'Admin';


    public function __construct(SiteAdminService $service)
    {
        parent::__construct($service);
    }


    public function checkout(SiteCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem($id)
    {
        $this->service->canAction('getSite');
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function getList()
    {
        $this->service->canAction('getSiteList');
        $this->service->getList(collect());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(SiteAdminOrderingPost $request)
    {
        $this->service->canAction('editSite');
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(SiteAdminRemovePost $request)
    {
        $this->service->canAction('deleteSite');
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(SiteAdminStatePost $request)
    {
        $this->service->canAction('updateSiteState');
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SiteAdminStorePost $request)
    {
        InputHelper::null($request->validated(), 'id') ? $this->service->canAction('addSite')
            : $this->service->canAction('editSite');
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(SiteAdminSearchPost $request)
    {
        $this->service->canAction('searchSite');
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
