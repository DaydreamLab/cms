<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Services\Product\Admin\ProductAdminService;
use DaydreamLab\Cms\Services\ProductCategory\Admin\ProductCategoryAdminService;
use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    protected $categoryService;

    protected $productService;

    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/product.json'), true);
        $this->categoryService = app(ProductCategoryAdminService::class);
        $this->productService = app(ProductAdminService::class);

        $this->migrate($data, null);
    }


    public function migrate($data, $parent)
    {
        foreach ($data as $product_category_data) {
            $products = $product_category_data['products'];
            unset($product_category_data['products']);
            $children = $product_category_data['children'];
            unset($product_category_data['children']);

            if ($parent) {
                $product_category_data['parent_id'] = $parent->id;
            }

            $product_category = $this->categoryService->store(collect($product_category_data));
            if ($parent) {
                $parent->appendNode($product_category);
            }
            # products
            foreach ($products as $product) {

            }

            if (count($children))
            {
                self::migrate($children, $product_category);
            }
        }
    }
}
