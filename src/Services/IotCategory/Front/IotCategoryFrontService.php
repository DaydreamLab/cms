<?php

namespace DaydreamLab\Cms\Services\IotCategory\Front;

use DaydreamLab\Cms\Repositories\IotCategory\Front\IotCategoryFrontRepository;
use DaydreamLab\Cms\Services\IotCategory\IotCategoryService;
use Kalnoy\Nestedset\Collection as NestCollection;

class IotCategoryFrontService extends IotCategoryService
{
    public function __construct(IotCategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function treeList()
    {
        $all = $this->repo->all();
        $all = new NestCollection($all);
        $this->status = 'getItemSuccess';
        $this->response = $all->toTree();
        return $this->response;
    }
}
