<?php

namespace DaydreamLab\Cms\Services\ProductCategory\Admin;

use DaydreamLab\Cms\Repositories\ProductCategory\Admin\ProductCategoryAdminRepository;
use DaydreamLab\Cms\Resources\ProductCategory\Admin\Models\ProductCategoryAdminListResource;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use Illuminate\Support\Collection;
use Kalnoy\Nestedset\Collection as NestCollection;

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


    public function tree()
    {
        $all = $this->all()->map(function ($p) {
            $locker = ($p->locker) ? $p->locker->only(['id', 'uuid', 'name']) : [];
            unset($p->locker);
            $p->locker = $locker;
            return $p;
        });
        $all = new NestCollection($all);

        $tree = $all->toTree();

        $this->status = 'GetTreeListSuccess';
        $this->response = $tree;

        return $tree;
    }
}
