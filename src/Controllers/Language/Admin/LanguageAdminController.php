<?php

namespace DaydreamLab\Cms\Controllers\Language\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminGetItemGet;
use DaydreamLab\Cms\Resources\Language\Admin\Collections\LanguageAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Language\Admin\Models\LanguageAdminResource;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminRemovePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStorePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStatePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminSearchPost;
use Throwable;

class LanguageAdminController extends CmsController
{
    protected $modelName = 'Language';

    public function __construct(LanguageAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(LanguageAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], LanguageAdminResource::class);
    }


    public function remove(LanguageAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(LanguageAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], LanguageAdminListResourceCollection::class);
    }


    public function state(LanguageAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(LanguageAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], LanguageAdminResource::class);
    }
}
