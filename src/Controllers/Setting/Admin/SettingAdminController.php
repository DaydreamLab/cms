<?php

namespace DaydreamLab\Cms\Controllers\Setting\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Setting\Admin\SettingAdminGetItemGet;
use DaydreamLab\Cms\Requests\Setting\Admin\SettingAdminRestoreAllRequest;
use DaydreamLab\Cms\Requests\Setting\Admin\SettingAdminStorePost;
use DaydreamLab\Cms\Services\Setting\Admin\SettingAdminService;

class SettingAdminController extends CmsController
{
    protected $modelName = 'Setting';

    protected $modelType = 'Admin';

    public function __construct(SettingAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(SettingAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem();

        return $this->response($this->service->status, $this->service->response);
    }


    public function siteInfo()
    {
        $this->service->siteInfo();

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(SettingAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function restoreAllLockData(SettingAdminRestoreAllRequest $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->restoreAllLockData($request);

        return $this->response($this->service->status, $this->service->response);
    }
}
