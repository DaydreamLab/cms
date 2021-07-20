<?php

namespace DaydreamLab\Cms\Controllers\CustomerMessage\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\CustomerMessage\Front\CustomerMessageFrontStoreRequest;
use DaydreamLab\Cms\Services\CustomerMessage\Front\CustomerMessageFrontService;
use Throwable;

class CustomerMessageFrontController extends CmsController
{
    protected $modelName = 'CustomerMessage';

    public function __construct(CustomerMessageFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function store(CustomerMessageFrontStoreRequest $request)
    {
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
