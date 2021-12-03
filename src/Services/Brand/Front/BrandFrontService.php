<?php

namespace DaydreamLab\Cms\Services\Brand\Front;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Repositories\Brand\Front\BrandFrontRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Product\Front\ProductFrontService;
use DaydreamLab\Dsth\Services\EventSession\Front\EventSessionFrontService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
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
        # 需要把 products 按照產品大類分類
        $products = $brand->products;
        $filter_products = [];
        foreach ($products as $product) {
            $pData = $product->only(['alias', 'title']);
            $targetCategory = $product->parentCategory ? : $product->productCategory;
            $filter_products[$targetCategory->alias]['title'] = $targetCategory->title;
            $filter_products[$targetCategory->alias]['products'][] = $pData;
        }
        $filter_products_array = [];
        foreach ($filter_products as $key => $filter_product) {
            $temp['product_category_alias'] = $key;
            $temp['product_category_title'] = $filter_product['title'];
            $temp['products'] = $filter_product['products'];
            $filter_products_array[] = $temp;
        }
        $brand->products = $filter_products_array;
        $brand->events = $brandEvents = app(EventSessionFrontService::class)->searchEvent(
            collect(['limit' => 6, 'brandAlias' => $brand->alias])
        );

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


    public function search(Collection $input)
    {
        if ( $productCategoryAlias = $input->get('product_category_alias') ) {
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

        if ( $search = $input->get('search') ) {
            $searchKeys = $input->get('searchKeys');
            $brands = $brands->filter(function ($b) use ($search, $searchKeys) {
                foreach ($searchKeys as $searchKey) {
                    if ( stripos($b->{$searchKey}, $search) !== false ) {
                        return true;
                    }
                }
                return false;
            })->values();
        }

        $this->response = $brands;
        $this->status = 'SearchSuccess';
        return $this->response;
    }
}
