<?php

namespace DaydreamLab\Cms\Services\Product\Front;

use DaydreamLab\Cms\Repositories\Product\Front\ProductFrontRepository;
use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\Front\ProductCategoryFrontService;
use Illuminate\Support\Collection;

class ProductFrontService extends ProductService
{
    public function __construct(ProductFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function search(Collection $input)
    {

        if ( $brand_alias = $input->get('brand_alias') ) {
            $brand = Brand::where('alias', $brand_alias)->first();
            if ($brand) {
                $q = $input->get('q');
                $q = $q->whereHas('brands', function ($query) use ($brand) {
                    $query->where('brands_products_maps.brand_id', '=', $brand->id);
                });
                $input->put('q', $q);
            }
            $input->forget('brand_alias');
        }

        if ( $productCategoryAlias = $input->get('product_category_alias') ) {
            $categoryFS = app(ProductCategoryFrontService::class);
            $pc = $categoryFS->findBy('alias', '=', $productCategoryAlias)->first();
            if ($pc) {
                $category_ids = $categoryFS->findSubTreeIds($pc->id);
                $q = $input->get('q');
                $q = $q->whereIn('product_category_id', $category_ids);
                $input->put('q', $q);
            }
            $input->forget('product_category_alias');
        }

        return parent::search($input);
    }
}
