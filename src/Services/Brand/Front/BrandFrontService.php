<?php

namespace DaydreamLab\Cms\Services\Brand\Front;

use DaydreamLab\Cms\Repositories\Brand\Front\BrandFrontRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Product\Front\ProductFrontService;
use Illuminate\Support\Collection;

class BrandFrontService extends BrandService
{
    public function __construct(BrandFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getBrandByAlias(Collection $input)
    {
        $brand = $this->findBy('alias', '=', $input->get('alias'))->first();
        $this->status = 'GetItemSuccess';
        $this->response = $brand;

        return $brand;
    }


    public function search(Collection $input)
    {
        if ( $productCategoryAlias = $input->get('product_category_alias') ) {

            $productFS = app(ProductFrontService::class);
            $products = $productFS->search(collect(['product_category_alias' => $productCategoryAlias, 'limit' => 0]));
            show($products);
        } else {
            $brands = $this->repo->getAllBrands();
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
            $this->response = $brands->map(function ($b) {
                return $b->only(['title', 'title_zhtw', 'alias']);
            });
        }

        $this->status = 'SearchSuccess';
        return $this->response;
    }
}
