<?php

namespace DaydreamLab\Cms\Controllers\Form\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminGetItemGet;
use DaydreamLab\Cms\Services\Form\Admin\FormAdminService;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminRemovePost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminStorePost;
use DaydreamLab\Cms\Requests\Form\Admin\FormAdminSearchPost;
use Throwable;

class FormAdminController extends CmsController
{
    protected $modelName = 'Form';

    public function __construct(FormAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(FormAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(FormAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(FormAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(FormAdminStorePost $request)
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
