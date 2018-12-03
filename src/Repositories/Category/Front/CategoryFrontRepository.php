<?php

namespace DaydreamLab\Cms\Repositories\Category\Front;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Models\Category\Front\CategoryFront;

class CategoryFrontRepository extends CategoryRepository
{
    public function __construct(CategoryFront $model)
    {
        parent::__construct($model);
    }


    public function getItemsByIds($ids, $access_ids)
    {
        return $this->model->whereIn('id', $ids)
                            ->where('state', 1)
                            ->whereIn('access', $access_ids)
                            ->get();
    }


    public function getContentTypeItems($extension, $type, $access_ids)
    {
        return $this->model->where('extension', $extension)
                            ->where('content_type', $type)
                            ->whereIn('access', $access_ids)
                            ->where('state', 1)
                            ->get();
    }
}