<?php

namespace DaydreamLab\Cms\Controllers\Setting\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Setting\Front\SettingFrontGetItemGet;
use DaydreamLab\Cms\Requests\Setting\Front\SettingFrontSearchRequest;
use DaydreamLab\Cms\Services\Setting\Front\SettingFrontService;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Symfony\Component\HttpFoundation\Request;

class SettingFrontController extends CmsController
{
    protected $modelName = 'Setting';

    protected $modelType = 'Front';


    public function __construct(SettingFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }

    public function getItem(SettingFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(0, $request->route('locale'), $request->getHttpHost());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(SettingFrontSearchRequest $request)
    {
        $this->service->search($request->validated());
        return $this->response($this->service->status, $this->service->response);
    }
}
