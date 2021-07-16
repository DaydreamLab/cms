<?php

namespace DaydreamLab\Cms\Services\Product\Admin;

use DaydreamLab\Cms\Models\ProductCategory\Admin\ProductCategoryAdmin;
use DaydreamLab\Cms\Repositories\Product\Admin\ProductAdminRepository;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\Admin\ProductCategoryAdminService;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class ProductAdminService extends ProductService
{
    public function __construct(ProductAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $brands = $input->get('brands') ? $input->get('brands') : [];
        $brand_ids = array_map(function($brand) {
            return $brand['id'];
        }, $brands);
        if (count($brand_ids)) {
            $item->brands()->attach($brand_ids);
        }
    }


    public function modifyMapping($item, $input)
    {
        $brands = $input->get('brands') ? $input->get('brands') : [];
        $brand_ids = array_map(function($brand) {
            return $brand['id'];
        }, $brands);
        if (count($brand_ids)) {
            $item->brands()->sync($brand_ids);
        }
    }


    public function search(Collection $input)
    {
        if (!InputHelper::null($input, 'product_category_id')) {
            $categoryAdminService = app(ProductCategoryAdminService::class);
            $category_ids = $categoryAdminService->findSubTreeIds($input->get('product_category_id'));
        } else {
            $category_ids = [$input->get('product_category_id')];
        }
        $q = $input->get('q');
        $q = $q->whereIn('product_category_id', $category_ids);
        $input->put('q', $q);
        $input->forget('product_category_id');

        return parent::search($input);
    }
}