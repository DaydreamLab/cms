<?php

namespace DaydreamLab\Cms\Controllers\Language\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminRemovePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStorePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStatePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminSearchPost;

class LanguageAdminController extends CmsController
{
    protected $modelName = 'Language';

    protected $modelType = 'Admin';

    public function __construct(LanguageAdminService $service)
    {
        parent::__construct($service);
    }


    public function getItem($id)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(LanguageAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(LanguageAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(LanguageAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(LanguageAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
