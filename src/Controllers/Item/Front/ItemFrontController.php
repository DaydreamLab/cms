<?php

namespace DaydreamLab\Cms\Controllers\Item\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontGetItemGet;
use DaydreamLab\Cms\Resources\Item\Front\Collections\ItemFrontListResourceCollection;
use DaydreamLab\Cms\Resources\Item\Front\Models\ItemFrontResource;
use DaydreamLab\Cms\Resources\Item\Front\Models\ItemContentFrontResource;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontSearchPost;
use Throwable;

class ItemFrontController extends CmsController
{
    protected $modelName = 'Item';

    public function __construct(ItemFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getContentByAlias(ItemFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItemByAlias(Helper::collect([
                'alias'     => $request->route('alias'),
                'language'  => "*"
            ]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemContentFrontResource::class);
    }


    public function getItemByAlias(ItemFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItemByAlias(Helper::collect([
                'alias'     => $request->route('alias'),
                'language'  => $request->get('language') != ''
                    ? $request->get('language')
                    : config('daydreamlab.global.locale')
            ]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemFrontResource::class);
    }


    public function search(ItemFrontSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemFrontListResourceCollection::class);
    }
}
