<?php

namespace DaydreamLab\Cms\Services\ProductCategory\Admin;

use DaydreamLab\Cms\Repositories\ProductCategory\Admin\ProductCategoryAdminRepository;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use Illuminate\Support\Collection;

class ProductCategoryAdminService extends ProductCategoryService
{
    public function __construct(ProductCategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function findSubTreeIds($id)
    {
        return $this->repo->findSubTreeIds($id);
    }


    public function store(Collection $input)
    {
        $item = parent::store($input);

        return $item;
    }
}
