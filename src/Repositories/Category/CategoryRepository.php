<?php

namespace DaydreamLab\Cms\Repositories\Category;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Repositories\CmsRepository;
use DaydreamLab\JJAJ\Traits\NestedRepositoryTrait;

class CategoryRepository extends CmsRepository
{
    use NestedRepositoryTrait;

    public function __construct(Category $model)
    {
        parent::__construct($model);
    }

    public function findDescendantOf($id)
    {
        return $this->model->whereDescendantOf($id)->get();
    }


    public function findSubTreeIds($id)
    {
        $category = $this->find($id);
        $descendants = $category->descendants->pluck('id')->all();
        $descendants[] = $id;

        return $descendants;
    }


    public function treeList($extension, $additional_queries, $access_ids)
    {
        $query = $this->model->where('extension', $extension)->whereIn('access', $access_ids);
        foreach ($additional_queries as $key => $value)
        {
            if ($key == 'special_queries')
            {
                foreach ($value as $item)
                {
                    $query = $query->{$item['type']}($item['key'], $item['value']);
                }
            }
            else
            {
                $query = $query->where($key, $value);
            }
        }

        return $query->get();
    }
}