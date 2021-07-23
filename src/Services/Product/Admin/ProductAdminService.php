<?php

namespace DaydreamLab\Cms\Services\Product\Admin;

use DaydreamLab\Cms\Models\ProductCategory\Admin\ProductCategoryAdmin;
use DaydreamLab\Cms\Repositories\Product\Admin\ProductAdminRepository;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\Admin\ProductCategoryAdminService;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class ProductAdminService extends ProductService
{
    protected $pcService;

    public function __construct(ProductAdminRepository $repo, ProductCategoryAdminService $pcService)
    {
        parent::__construct($repo);
        $this->repo = $repo;
        $this->pcService = $pcService;
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
        if ( $input->get('brands') !== null ) {
            $brand_ids = array_map(function($brand) {
                return $brand['id'];
            }, $input->get('brands'));
            $item->brands()->sync($brand_ids);
        }
    }


    public function search(Collection $input)
    {
        if (!InputHelper::null($input, 'product_category_id')) {
            $categoryAdminService = app(ProductCategoryAdminService::class);
            $category_ids = $categoryAdminService->findSubTreeIds($input->get('product_category_id'));
            $q = $input->get('q');
            $q = $q->whereIn('product_category_id', $category_ids);
            $input->put('q', $q);
            $input->forget('product_category_id');
        }

        return parent::search($input);
    }


    public function store(Collection $input)
    {
        $category = $this->pcService->find($input->get('product_category_id'));
        if (!$category) {
            throw new NotFoundException('ItemNotExist', [
                'categoryId' => (int)$input->get('product_category_id')
            ], null, 'ProductCategory');
        }

        return parent::store($input);
    }
}