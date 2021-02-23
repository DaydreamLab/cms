<?php

namespace DaydreamLab\Cms\Controllers\Category\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontGetItemGet;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontSearchItemPost;
use DaydreamLab\Cms\Resources\Category\Front\Collections\CategoryFrontListResourceCollection;
use DaydreamLab\Cms\Resources\Category\Front\Models\CategoryFrontResource;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontSearchPost;

class CategoryFrontController extends CmsController
{
    protected $modelName = 'Category';

    protected $modelType = 'Front';

    public function __construct(CategoryFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItemByAlias(CategoryFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItemByAlias(collect([
            'alias' => $request->route('alias'),
        ]));

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object'
            ? new CategoryFrontResource($this->service->response)
            : null
        );
    }


    public function search(CategoryFrontSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, new CategoryFrontListResourceCollection($this->service->response));
    }


    public function searchItems(CategoryFrontSearchItemPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->searchItems($request->validated());

        return $this->response($this->service->status, new CategoryFrontListResourceCollection($this->service->response));
    }
}
