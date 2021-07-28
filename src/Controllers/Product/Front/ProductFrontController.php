<?php

namespace DaydreamLab\Cms\Controllers\Product\Front;

use DaydreamLab\Cms\Controllers\cmsController;
use DaydreamLab\Cms\Requests\Product\Front\ProductFrontSearchRequest;
use DaydreamLab\Cms\Resources\Product\Front\Collections\ProductFrontListResourceCollection;
use DaydreamLab\Cms\Services\Product\Front\ProductFrontService;
use Throwable;

class ProductFrontController extends cmsController
{
    protected $modelName = 'Product';

    public function __construct(ProductFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function search(ProductFrontSearchRequest $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ProductFrontListResourceCollection::class);
    }
}
