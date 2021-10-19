<?php

namespace DaydreamLab\Cms\Controllers\Item\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminContentFeaturePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminContentGetItemGet;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminContentRemovePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminContentRestorePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminContentSearchPost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminContentStatePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminContentStorePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminFeaturedOrderingPost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminGetItemGet;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminRemovePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminStorePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminStatePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminSearchPost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminRestorePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminFeaturePost;
use DaydreamLab\Cms\Requests\Item\Admin\ItemAdminOrderingPost;
use DaydreamLab\Cms\Resources\Item\Admin\Models\ItemAdminResource;
use DaydreamLab\Cms\Resources\Item\Admin\Models\ItemContentAdminResource;
use DaydreamLab\Cms\Resources\Item\Admin\Collections\ItemAdminListResourceCollection;
use DaydreamLab\Cms\Resources\Item\Admin\Collections\ItemContentAdminListResourceCollection;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use Illuminate\Http\Request;
use Throwable;

class ItemAdminController extends CmsController
{
    protected $modelName = 'Item';

    public function __construct(ItemAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function importVideo(Request $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->videoImport($request);
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function importPromotion(Request $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->importPromotion($request);
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featured(ItemAdminFeaturePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredContent(ItemAdminContentFeaturePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->featured($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function featuredOrdering(ItemAdminFeaturedOrderingPost $request)
    {
        try {
            $this->service->featuredOrdering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItem(ItemAdminGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemAdminResource::class);
    }


    public function getContentItem(ItemAdminContentGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->getItem(collect(['id' => $request->route('id')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemContentAdminResource::class);
    }


    public function ordering(ItemAdminOrderingPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->ordering($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(ItemAdminRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function removeContent(ItemAdminContentRemovePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->remove($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restore(ItemAdminRestorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function restoreContent(ItemAdminContentRestorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->restore($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(ItemAdminSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemAdminListResourceCollection::class);
    }


    public function searchContent(ItemAdminContentSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemContentAdminListResourceCollection::class);
    }


    public function state(ItemAdminStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function stateContent(ItemAdminContentStatePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->state($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(ItemAdminStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemAdminResource::class);
    }


    public function storeContent(ItemAdminContentStorePost $request)
    {
        $this->service->setUser($request->user('api'));
        try {
            $this->service->store($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], ItemContentAdminResource::class);
    }

    /**
     * 測試排序功能
     */
    public function test()
    {
//        # 1-1
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 1,
//            'featured_ordering' => 1,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if($result !== [1,2,3,4,5]) {
//            echo '測試#1-1錯誤';
//        }
//
//        # 1-2
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 1,
//            'featured_ordering' => 2,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [2,1,3,4,5]) {
//            echo '測試#1-2錯誤';
//        }
//
//        # 1-3
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 1,
//            'featured_ordering' => 3,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [3, 1, 2, 4,5]) {
//            echo '測試#1-3錯誤';
//        }
//
//
//        # 1-4
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 1,
//            'featured_ordering' => 4,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [4, 1, 2, 3, 5]) {
//            echo '測試#1-4錯誤';
//        }
//
//        # 1-5
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 1,
//            'featured_ordering' => 5,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [5, 1,2 ,3,4]) {
//            echo '測試#1-5錯誤';
//        }
//
//
//        # 1-6
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 1,
//            'featured_ordering' => 0,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [1,2,3,4,5]) {
//            echo '測試#1-6錯誤';
//        }
//
//
//        # 2-1
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 2,
//            'featured_ordering' => 0,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [2,1,3,4,5]) {
//            echo '測試#2-1錯誤';
//        }
//
//        # 2-2
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 2,
//            'featured_ordering' => 1,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//
//        if( $result !== [1,2,3,4,5]) {
//            echo '測試#2-2錯誤';
//            show($result);
//        }
//
//
//        # 2-3
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 2,
//            'featured_ordering' => 2,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [1,2,3,4,5]) {
//            echo '測試#2-3錯誤';
//        }
//
//
//        # 2-4
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 2,
//            'featured_ordering' => 3,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [1,3,2,4,5]) {
//            echo '測試#2-4錯誤';
//        }
//
//
//        # 2-5
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 2,
//            'featured_ordering' => 4,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [1,4,2,3,5]) {
//            echo '測試#2-5錯誤';
//        }
//
//
//        # 2-6
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 2,
//            'featured_ordering' => 5,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [1,5,2,3,4]) {
//            echo '測試#2-6錯誤';
//        }
//
//        # 2-7
//        $this->init();
//        $this->service->featuredOrdering(collect([
//            'id' => 2,
//            'featured_ordering' => null,
//        ]));
//        $result = Item::all()->pluck(['featured_ordering'])->all();
//        if( $result !== [1,5,2,3,4]) {
//            echo '測試#2-7錯誤';
//        }
    }



    public function init()
    {
        Item::truncate();

        $data = Item::create([
            'title' => '文章1',
            'alias' => 'a1',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' => 1,
            'ordering' => 1
        ]);

        $data = Item::create([
            'title' => '文章2',
            'alias' => 'a2',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' =>2,
            'ordering' => 2
        ]);


        $data = Item::create([
            'title' => '文章3',
            'alias' => 'a3',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' =>3,
            'ordering' => 3
        ]);

        $data = Item::create([
            'title' => '文章4',
            'alias' => 'a4',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' =>4,
            'ordering' => 4
        ]);


        $data = Item::create([
            'title' => '文章5',
            'alias' => 'a5',
            'category_id' => 1,
            'access' => 1,
            'featured' => 1,
            'featured_ordering' =>5,
            'ordering' => 5
        ]);

    }
}
