<?php

namespace DaydreamLab\Cms\Services\Brand\Front;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Repositories\Brand\Front\BrandFrontRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Product\Front\ProductFrontService;
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
        # 需要把 products 按照產品小類分類
        $products = $brand->products;
        $filter_products = [];
        foreach ($products as $product) {
            $pData = $product->only(['alias', 'title']);
            $filter_products[$product->productCategory->title][] = $pData;
        }
        $brand->products = $filter_products;

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
            $products = $productFS->search(collect(['q' => new QueryCapsule(), 'product_category_alias' => [$productCategoryAlias], 'limit' => 0]));
            # map 出這些產品屬於的品牌
            $brandsWithDuplicate = collect([]);
            $products->each(function ($p) use (&$brandsWithDuplicate) {
                $brandsWithDuplicate = $brandsWithDuplicate->merge($p->brands);
            });
            $brands = $brandsWithDuplicate->unique(function ($b) {
                return $b->id;
            })->values();

        } else {
            $brands = $this->repo->getAllBrands();
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
