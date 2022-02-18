<?php

namespace DaydreamLab\Cms\Repositories\IotCategory;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotCategoryRepository extends CmsRepository
{
    protected $modelName = 'IotCategory';

    public function __construct(IotCategory $model)
    {
        parent::__construct($model);
        $this->model = $model;
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
}
