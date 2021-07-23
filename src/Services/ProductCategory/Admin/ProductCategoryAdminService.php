<?php

namespace DaydreamLab\Cms\Services\ProductCategory\Admin;

use Carbon\Carbon;
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
        $tz = $this->user->timezone;

        $all = $this->all()->map(function ($p) use ($tz) {
            $locker = ($p->locker) ? $p->locker->only(['id', 'uuid', 'name']) : [];
            unset($p->locker);
            $p->locker = $locker;

            $created_at = Carbon::parse($p->created_at, config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
            unset($p->created_at);
            $p->created_at = $created_at;

            $updated_at = Carbon::parse($p->updated_at, config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
            unset($p->updated_at);
            $p->updated_at = $updated_at;

            $locked_at = Carbon::parse($p->locked_at, config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
            unset($p->locked_at);
            $p->locked_at = $locked_at;

            return $p;
        });
        $all = new NestCollection($all);

        $tree = $all->toTree();

        $this->status = 'GetTreeListSuccess';
        $this->response = $tree;

        return $tree;
    }
}
