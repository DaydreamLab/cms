<?php

namespace DaydreamLab\Cms\Controllers\Tag\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontGetItemGet;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontSearchPost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontSearchItemPost;
use DaydreamLab\Cms\Resources\Tag\Front\Models\TagFrontResource;
use DaydreamLab\Cms\Resources\Tag\Front\Collections\TagFrontListResourceCollection;
use DaydreamLab\Cms\Resources\Item\Front\Models\ItemFrontListResource;
use DaydreamLab\Cms\Services\Tag\Front\TagFrontService;
use DaydreamLab\JJAJ\Helpers\Helper;


class TagFrontController extends CmsController
{
    protected $modelName = 'Tag';

    protected $modelType = 'Front';

    public function __construct(TagFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItemByAlias(TagFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItemByAlias(Helper::collect(['alias' => $request->route('alias')]));

        return $this->response($this->service->status,
            gettype($this->service->response) == 'object' ? new TagFrontResource($this->service->response) : null);
    }

    
    public function search(TagFrontSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, new TagFrontListResourceCollection($this->service->response));
    }


    public function searchItems(TagFrontSearchItemPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->searchItems($request->validated());

        return $this->response($this->service->status, new ItemFrontListResource($this->service->response));
    }
}
