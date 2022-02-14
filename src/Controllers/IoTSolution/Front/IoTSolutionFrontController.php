<?php

namespace DaydreamLab\Cms\Controllers\IoTSolution\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IoTSolution\Front\IoTSolutionFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IoTSolution\Front\IoTSolutionFrontSearchRequest;
use DaydreamLab\Cms\Services\IoTSolution\Front\IoTSolutionFrontService;
use Throwable;

class IoTSolutionFrontController extends CmsController
{
    protected $modelName = 'Solution';

    public function __construct(IoTSolutionFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(IoTSolutionFrontGetItemRequest $request)
    {
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IoTSolutionFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
