<?php

namespace DaydreamLab\Cms\Repositories\Category\Admin;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Models\Category\Admin\CategoryAdmin;
use DaydreamLab\JJAJ\Helpers\Helper;

class CategoryAdminRepository extends CategoryRepository
{
    public function __construct(CategoryAdmin $model)
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
}