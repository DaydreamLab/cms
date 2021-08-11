<?php

namespace DaydreamLab\Cms\Controllers\Brand\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Brand\Front\BrandFrontGetItemRequest;
use DaydreamLab\Cms\Requests\Brand\Front\BrandFrontSearchRequest;
use DaydreamLab\Cms\Resources\Brand\Front\Models\BrandFrontResource;
use DaydreamLab\Cms\Services\Brand\Front\BrandFrontService;
use Throwable;

class BrandFrontController extends CmsController
{
    protected $modelName = 'Brand';

    public function __construct(BrandFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getBrandByAlias(BrandFrontGetItemRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getBrandByAlias($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], BrandFrontResource::class);
    }


    public function search(BrandFrontSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
