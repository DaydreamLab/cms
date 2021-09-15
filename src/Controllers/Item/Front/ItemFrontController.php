<?php

namespace DaydreamLab\Cms\Controllers\Item\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontGetItemGet;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontSearchPost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontSearchSitePost;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontContentGetItemGet;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontContentSearchPost;
use DaydreamLab\Cms\Resources\Item\Front\Collections\ItemFrontListResourceCollection;
use DaydreamLab\Cms\Resources\Item\Front\Collections\ItemContentFrontListResourceCollection;
use DaydreamLab\Cms\Resources\Item\Front\Collections\ItemFrontSearchResourceCollection;
use DaydreamLab\Cms\Resources\Item\Front\Models\ItemFrontResource;
use DaydreamLab\Cms\Resources\Item\Front\Models\ItemContentFrontResource;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use Throwable;

class ItemFrontController extends CmsController
{
    protected $modelName = 'Item';

    public function __construct(ItemFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getContentByAlias(ItemFrontContentGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getContentByAlias($request->validated());
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


    public function getFinance(ItemFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getFinance();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getMemorabilia(ItemFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getMemorabilia();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getRules(ItemFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getRules();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getStockholder(ItemFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getStockholder();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function homepage()
    {
        try {
            $this->service->homepage();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
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


    public function searchContent(ItemFrontContentSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchContent($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemContentFrontListResourceCollection::class);
    }


    public function searchSite(ItemFrontSearchSitePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchSite($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemFrontSearchResourceCollection::class);
    }


    public function searchSolution(ItemFrontContentSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchSolution($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemContentFrontListResourceCollection::class);
    }


    public function searchCase(ItemFrontContentSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchCase($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemContentFrontListResourceCollection::class);
    }


    public function searchBulletin(ItemFrontContentSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchBulletin($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function searchPromotion(ItemFrontContentSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchPromotion($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function searchVideo(ItemFrontContentSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->searchVideo($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }
}
