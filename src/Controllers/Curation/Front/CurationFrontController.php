<?php

namespace DaydreamLab\Cms\Controllers\Curation\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Curation\Front\CurationFrontGetIndexRequest;
use DaydreamLab\Cms\Requests\Curation\Front\CurationFrontGetItemByAliasRequest;
use DaydreamLab\Cms\Resources\Curation\Front\Models\CurationFrontResource;
use DaydreamLab\Cms\Services\Curation\Front\CurationFrontService;
use Throwable;

class CurationFrontController extends CmsController
{
    protected $modelName = 'Curation';

    public function __construct(CurationFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getIndex(CurationFrontGetIndexRequest $request)
    {
        try {
            $this->service->getIndex();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CurationFrontResource::class);
    }


    public function getItemByAlias(CurationFrontGetItemByAliasRequest $request)
    {
        try {
            $this->service->getItemByAlias($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], CurationFrontResource::class);
    }
}
