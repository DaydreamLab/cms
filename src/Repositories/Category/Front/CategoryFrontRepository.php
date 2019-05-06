<?php

namespace DaydreamLab\Cms\Repositories\Category\Front;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\JJAJ\Helpers\Helper;

class CategoryFrontRepository extends CategoryRepository
{
    public function __construct(CategoryFront $model)
    {
        parent::__construct($model);
    }


    public function getItemsByIds($params, $access_ids)
    {
        $category_ids = $this->getParamsIds($params, 'category_ids');

        $query =  $this->model
            ->whereIn('id', $category_ids)
            ->where('state', 1)
            ->whereIn('access', $access_ids)
            ->orderBy($params['category_order_by'], $params['category_order']);

        return (int)$params['category_count'] ? $query->paginate((int)$params['category_count']) : $query->paginate($this->infinity);
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