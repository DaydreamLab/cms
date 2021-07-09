<?php

namespace DaydreamLab\Cms\Services\Product\Admin;

use DaydreamLab\Cms\Repositories\Product\Admin\ProductAdminRepository;
use DaydreamLab\Cms\Services\Product\ProductService;

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
}