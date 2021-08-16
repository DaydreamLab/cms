<?php

namespace DaydreamLab\Cms\Controllers\Tag\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontGetItemGet;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontSearchPost;
use DaydreamLab\Cms\Requests\Tag\Front\TagFrontSearchItemPost;
use DaydreamLab\Cms\Resources\Tag\Front\Models\TagFrontResource;
use DaydreamLab\Cms\Resources\Tag\Front\Collections\TagFrontListResourceCollection;
use DaydreamLab\Cms\Resources\Item\Front\Collections\ItemFrontListResourceCollection;
use DaydreamLab\Cms\Services\Tag\Front\TagFrontService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Throwable;

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
        try {
            $this->service->getItemByAlias(Helper::collect(['alias' => $request->route('alias')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TagFrontResource::class);
    }

    
    public function search(TagFrontSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TagFrontListResourceCollection::class);
    }


    public function searchItems(TagFrontSearchItemPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchItems($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], TagFrontListResourceCollection::class);
    }
}
