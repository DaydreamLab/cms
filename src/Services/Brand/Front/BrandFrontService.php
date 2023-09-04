<?php

namespace DaydreamLab\Cms\Services\Brand\Front;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Repositories\Brand\Front\BrandFrontRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Product\Front\ProductFrontService;
use DaydreamLab\Dsth\Services\EventSession\Front\EventSessionFrontService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use DaydreamLab\Media\Services\File\Front\FileFrontService;
use Illuminate\Support\Collection;

class BrandFrontService extends BrandService
{
    public function __construct(BrandFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getAllBrands()
    {
        return $this->repo->getAllBrands();
    }


    public function getBrandByAlias(Collection $input)
    {
        $brand = $this->findBy('alias', '=', $input->get('alias'))->first();
        if (!$brand) {
            throw new NotFoundException('ItemNotExist');
        }

        # 需要把 products 按照產品大類分類
        $products = $brand->products;
        $filter_products = [];
        foreach ($products as $product) {
            $pData = $product->only(['alias', 'title']);
            $targetCategory = $product->parentCategory ? : $product->productCategory;
            if ($targetCategory) {
                $filter_products[$targetCategory->alias]['title'] = $targetCategory->title;
                $filter_products[$targetCategory->alias]['products'][] = $pData;
            }
        }
        $filter_products_array = [];
        foreach ($filter_products as $key => $filter_product) {
            $temp['product_category_alias'] = $key;
            $temp['product_category_title'] = $filter_product['title'];
            $temp['products'] = $filter_product['products'];
            $filter_products_array[] = $temp;
        }

        $tabs = (object) [];
        $brand->products = $filter_products_array;
        $tabs->product = count($filter_products_array) ? 1 : 0;
        $brand->events = $brandEvents = app(EventSessionFrontService::class)->searchEvent(
            collect(['limit' => 6, 'brandAlias' => $brand->alias])
        );
        $tabs->event = $brand->events->count() ? 1 : 0;

        $itemFrontService = app(ItemFrontService::class);

        # 解決方案
        $tabs->solution = $itemFrontService->searchSolution(collect([
            'limit' => 1,
            'brand_alias' => [$input->get('alias')],
            'q' => new QueryCapsule()
        ]))->count();

        # 促銷訊息
        $tabs->promotion = $itemFrontService->searchPromotion(collect([
            'limit' => 1,
            'brand_alias' => [$input->get('alias')],
            'q' => new QueryCapsule()
        ]))->get('items')->count();

        # 品牌新訊
        $tabs->bulletin = $itemFrontService->searchBulletin(collect([
            'limit' => 1,
            'brand_alias' => [$input->get('alias')],
            'q' => new QueryCapsule()
        ]))->get('items')->count();

        # 成功案例
        $tabs->case = $itemFrontService->searchCase(collect([
            'limit' => 1,
            'brand_alias' => [$input->get('alias')],
            'q' => new QueryCapsule()
        ]))->count();

        # 產品影片
        $tabs->video = $itemFrontService->searchVideo(collect([
            'limit' => 1,
            'brand_alias' => [$input->get('alias')],
            'q' => new QueryCapsule()
        ]))->get('items')->count();

        # 檔案下載
        $tabs->file = app(FileFrontService::class)->search(collect([
            'limit' => 1,
            'contentType' => 'file',
            'brand_alias' => $input->get('alias'),
            'q' => new QueryCapsule()
        ]))->count();

        $brand->tabs = $tabs;

        $this->status = 'GetItemSuccess';
        $this->response = $brand;

        return $brand;
    }


    public function getContact()
    {
        $brands = $this->findBy('state', '=', 1);
        $this->status = 'GetItemSuccess';
        $this->response = $brands->map(function ($b) {
            return $b->only(['title', 'contact']);
        });

        return $this->response;
    }


    public function pureSearch(Collection $input)
    {
        return parent::search($input);
    }


    public function search(Collection $input)
    {
        if ($productCategoryAlias = $input->get('product_category_alias')) {
            # 拿出所有產品分類（包括小類）下的產品
            $productFS = app(ProductFrontService::class);
            $q = new QueryCapsule();
            $q->with('brands');
            $products = $productFS->search(collect(['q' => $q, 'product_category_alias' => $productCategoryAlias, 'limit' => 0]));
            # map 出這些產品屬於的品牌
            $brandsWithDuplicate = collect([]);
            $products->each(function ($p) use (&$brandsWithDuplicate) {
                $brandsWithDuplicate = $brandsWithDuplicate->merge($p->brands);
            });
            $brands = $brandsWithDuplicate->unique(function ($b) {
                return $b->id;
            })->sortBy('title')->values();

        } else {
            $brands = $this->repo->getAllBrands()->sortBy('title')->values();
        }

        if ($search = $input->get('search')) {
            $searchKeys = $input->get('searchKeys');
            $brands = $brands->filter(function ($b) use ($search, $searchKeys) {
                foreach ($searchKeys as $searchKey) {
                    if (stripos($b->{$searchKey}, $search) !== false) {
                        return true;
                    }
                }
                return false;
            })->values();
        }

        $this->response = $brands->sort(function ($a, $b) {
            $aFirstLetter = strtoupper(substr($a->title, 0, 1));
            $bFirstLetter = strtoupper(substr($b->title, 0, 1));

            if ($aFirstLetter !== $bFirstLetter) {
                return strcmp($aFirstLetter, $bFirstLetter);
            }
            return strcmp($a->title, $b->title);
        })->values();
        $this->status = 'SearchSuccess';
        return $this->response;
    }
}
