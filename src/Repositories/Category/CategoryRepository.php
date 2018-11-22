<?php

namespace DaydreamLab\Cms\Repositories\Category;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Traits\NestedRepositoryTrait;

class CategoryRepository extends BaseRepository
{
    use NestedRepositoryTrait;

    public function __construct(Category $model)
    {
        parent::__construct($model);
    }


    public function findSubTreeIds($id)
    {
        $category = $this->find($id);

        $subs = $this->model->where('_lft', '>=', $category->_lft)
            ->where('_rgt', '<=', $category->_rgt)
            ->get();
        $ids = [];
        foreach ($subs as $sub)
        {
            $ids[] = $sub->id;
        }

        return $ids;
    }


    public function treeList($extension, $access_ids)
    {
        return $this->model->where('extension', $extension)
                            ->whereIn('access', $access_ids)
                            ->get();
    }
}