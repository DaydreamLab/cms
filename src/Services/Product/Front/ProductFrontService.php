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


    public function getByAlias(Collection $input)
    {
        $product = $this->repo->findBy('alias', '=', $input->get('alias'))->first();
        $this->status = 'GetItemSuccess';
        $this->response = $product;
        return $product;
    }


    public function search(Collection $input, $paginate = true)
    {
        if ( $brand_alias = $input->get('brand_alias') ) {
            $brand_ids = [];
            foreach ($brand_alias as $ba) {
                $brand = Brand::where('alias', $ba)
                    ->where('state', 1)
                    ->first();
                if ($brand) {
                    $brand_ids[] = $brand->id;
                }
            }

            if ( count($brand_ids) ) {
                $q = $input->get('q');
                $q = $q->whereHas('brands', function ($query) use ($brand_ids) {
                    $query->whereIn('brands_products_maps.brand_id', $brand_ids);
                });
                $input->put('q', $q);
            }
        }
        $input->forget('brand_alias');

        if ( $productCategoryAlias = $input->get('product_category_alias') ) {
            $categoryFS = app(ProductCategoryFrontService::class);
            $pc_ids = [];
            foreach ($productCategoryAlias as $pca) {
                $pc = $categoryFS->findBy('alias', '=', $pca)->first();
                if ($pc) {
                    $category_ids = $categoryFS->findSubTreeIds($pc->id);
                    $pc_ids = array_merge($pc_ids, $category_ids);
                }
            }

            $q = $input->get('q');
            $q = $q->whereIn('product_category_id', $pc_ids)
                ->whereHas('brands', function ($q) {
                    $q->where('brands.state', 1);
                });
            $input->put('q', $q);
        }
        $input->forget('product_category_alias');

        $input->put('paginate', $paginate);
        $input->put('state', 1);
        return parent::search($input);
    }
}
