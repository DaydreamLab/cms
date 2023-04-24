<?php

namespace DaydreamLab\Cms\Controllers\Curation\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Category\Admin\CategoryAdminRestorePost;
use DaydreamLab\Cms\Requests\Curation\Admin\CurationAdminGetItemRequest;
use DaydreamLab\Cms\Requests\Curation\Admin\CurationAdminRemoveRequest;
use DaydreamLab\Cms\Requests\Curation\Admin\CurationAdminRestoreRequest;
use DaydreamLab\Cms\Requests\Curation\Admin\CurationAdminSearchRequest;
use DaydreamLab\Cms\Requests\Curation\Admin\CurationAdminStateRequest;
use DaydreamLab\Cms\Requests\Curation\Admin\CurationAdminStoreRequest;
use DaydreamLab\Cms\Resources\Curation\Admin\Collections\CurationAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Curation\Admin\Models\CurationAdminResource;
use DaydreamLab\Cms\Services\Curation\Admin\CurationAdminService;
use Throwable;

class CurationAdminController extends CmsController
{
    protected $modelName = 'Curation';

    public function __construct(CurationAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(CurationAdminGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CurationAdminResource::class);
    }


    public function remove(CurationAdminRemoveRequest $request)
    {
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(CurationAdminRestoreRequest $request)
    {
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(CurationAdminSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response(
            $this->service->status,
            $this->service->response,
            [],
            CurationAdminListResourceCollection::class
        );
    }


    public function state(CurationAdminStateRequest $request)
    {
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(CurationAdminStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CurationAdminResource::class);
    }
}
