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

class LanguageAdminController extends CmsController
{
    protected $modelName = 'Language';

    protected $modelType = 'Admin';

    public function __construct(LanguageAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(LanguageAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem(collect(['id' => $request->route('id')]));

        return $this->response($this->service->status, new LanguageAdminResource($this->service->response));
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

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
            ? new LanguageAdminResource($this->service->response->refresh())
            : $this->service->response
        );
    }


    public function search(LanguageAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status,
            new LanguageAdminListResourceCollection($this->service->response)
        );
    }
}
