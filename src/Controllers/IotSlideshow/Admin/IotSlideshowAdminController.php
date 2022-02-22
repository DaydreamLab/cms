<?php

namespace DaydreamLab\Cms\Controllers\IotSlideshow\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotSlideshow\Admin\IotSlideshowAdminGetItemRequest;
use DaydreamLab\Cms\Requests\IotSlideshow\Admin\IotSlideshowAdminRemoveRequest;
use DaydreamLab\Cms\Requests\IotSlideshow\Admin\IotSlideshowAdminRestoreRequest;
use DaydreamLab\Cms\Requests\IotSlideshow\Admin\IotSlideshowAdminSearchRequest;
use DaydreamLab\Cms\Requests\IotSlideshow\Admin\IotSlideshowAdminStateRequest;
use DaydreamLab\Cms\Requests\IotSlideshow\Admin\IotSlideshowAdminStoreRequest;
use DaydreamLab\Cms\Services\IotSlideshow\Admin\IotSlideshowAdminService;
use Throwable;

class IotSlideshowAdminController extends CmsController
{
    protected $modelName = 'IotSlideshow';

    public function __construct(IotSlideshowAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IotSlideshowAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(IotSlideshowAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(IotSlideshowAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotSlideshowAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(IotSlideshowAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(IotSlideshowAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
