<?php

namespace DaydreamLab\Cms\Controllers\Language\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminRemovePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStorePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStatePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminSearchPost;

class LanguageAdminController extends BaseController
{
    public function __construct(LanguageAdminService $service)
    {
        parent::__construct($service);
    }

    public function getItem($id)
    {
        $this->service->find($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(LanguageAdminRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(LanguageAdminStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(LanguageAdminStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(LanguageAdminSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
