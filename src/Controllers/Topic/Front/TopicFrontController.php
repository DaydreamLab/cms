<?php

namespace DaydreamLab\Cms\Controllers\Topic\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Topic\Front\TopicFrontGetItemByAliasRequest;
use DaydreamLab\Cms\Services\Topic\Front\TopicFrontService;
use Throwable;

class TopicFrontController extends CmsController
{
    protected $modelName = 'Topic';

    public function __construct(TopicFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItemByAlias(TopicFrontGetItemByAliasRequest $request)
    {
        try {
            $this->service->getItemByAlias($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
