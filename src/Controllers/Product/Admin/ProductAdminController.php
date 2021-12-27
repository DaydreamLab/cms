<?php

namespace DaydreamLab\Cms\Controllers\Product\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminGetItemRequest;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminExportRequest;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminImportRequest;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminRemoveRequest;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminRestoreRequest;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminSearchRequest;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminStateRequest;
use DaydreamLab\Cms\Requests\Product\Admin\ProductAdminStoreRequest;
use DaydreamLab\Cms\Resources\Product\Admin\Collections\ProductAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Product\Admin\Models\ProductAdminResource;
use DaydreamLab\Cms\Services\Product\Admin\ProductAdminService;
use Throwable;

class ProductAdminController extends CmsController
{
    protected $modelName = 'Product';

    public function __construct(ProductAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function export(ProductAdminExportRequest $request)
    {
        $this->service->setUser($request->user('api'));
        return $this->service->export($request->validated());
    }


    public function import(ProductAdminImportRequest $request)
    {
        $file = $request->file;
        $csv_rows = str_getcsv($file->get(), "\n");

        $header = str_getcsv($csv_rows[0]);
        unset($csv_rows[0]);

        $data = [];
        foreach ($csv_rows as $csv_row) {
            $parsed_row = str_getcsv($csv_row);
            $p = [];
            foreach ($parsed_row as $key => $col) {
                $p[$header[$key]] = $col;
            }
            $data[] = $p;
        }

        return $this->response('ImportSuccess', $data);
    }


    public function getItem(ProductAdminGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ProductAdminResource::class);
    }


    public function remove(ProductAdminRemoveRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ProductAdminRestoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ProductAdminSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ProductAdminListResourceCollection::class);
    }


    public function state(ProductAdminStateRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ProductAdminStoreRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ProductAdminResource::class);
    }
}
