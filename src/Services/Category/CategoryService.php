<?php

namespace DaydreamLab\Cms\Services\Category;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class CategoryService extends BaseService
{
    use NestedServiceTrait;

    protected $type = 'Category';

    public function __construct(CategoryRepository $repo)
    {
        parent::__construct($repo);
    }


    public function remove(Collection $input)
    {
        return $this->removeNested($input);
    }


    public function store(Collection $input)
    {
        return $this->storeNested($input);
    }

    public function tree($extension)
    {
        $tree = $this->findBy('extension', '=', $extension)->toTree();


        $this->status =  Str::upper(Str::snake($this->type . 'GetTreeSuccess'));
        $this->response = $tree;

        return $tree;
    }


    public function treeList($extension)
    {
        $tree = $this->repo->treeList($extension, $this->access_ids)->toFlatTree();

        $tree = $tree->map(function ($item, $key) {
            return $item->only(['id', 'tree_list_title']);
        });

        $this->status =  Str::upper(Str::snake($this->type . 'GetTreeListSuccess'));
        $this->response = $tree;

        return $tree;
    }
}
