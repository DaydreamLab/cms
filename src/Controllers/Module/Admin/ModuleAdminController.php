<?php

namespace DaydreamLab\Cms\Controllers\Module\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Module\Admin\ModuleAdminService;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminRemovePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminStorePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminStatePost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminSearchPost;
use DaydreamLab\Cms\Requests\Module\Admin\ModuleAdminOrderingPost;

class ModuleAdminController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Module';

    protected $modelType = 'Admin';

    public function __construct(ModuleAdminService $service)
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


    public function checkout(ModuleAdminRemovePost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(ModuleAdminOrderingPost $request)
    {
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ModuleAdminRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(ModuleAdminStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ModuleAdminStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ModuleAdminSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
