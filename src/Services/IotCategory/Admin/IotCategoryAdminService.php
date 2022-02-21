<?php

namespace DaydreamLab\Cms\Services\IotCategory\Admin;

use DaydreamLab\Cms\Repositories\IotCategory\Admin\IotCategoryAdminRepository;
use DaydreamLab\Cms\Services\IotCategory\IotCategoryService;
use Illuminate\Support\Collection;
use Kalnoy\Nestedset\Collection as NestCollection;

class IotCategoryAdminService extends IotCategoryService
{
    public function __construct(IotCategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {

    }


    public function modifyMapping($item, $input)
    {

    }


    public function removeMapping($item)
    {

    }


    public function getTree()
    {
        $all = $this->all()->sortBy(function ($p) {
            return $p->ordering;
        });
        $all = new NestCollection($all);

        $tree = $all->toTree();

        $this->status = 'GetTreeListSuccess';
        $this->response = $tree;

        return $tree;
    }


    public function search(Collection $input)
    {
        if ($input->get('state') == null) {
            $q = $input->get('q');
            $q = $q->whereIn('state', [0, 1]);
            $input->put('q', $q);
        }

        return parent::search($input);
    }


    public function searchParent(Collection $input)
    {
        $q = $input->get('q');
        $q = $q->where('parent_id', null);
        $input->put('q', $q);
        return $this->search($input);
    }


    public function searchChild(Collection $input)
    {
        return $this->search($input);
    }


    public function store(Collection $input)
    {
        if ( $input->get('state') == 1 && $input->get('publish_up') == null ) {
            $input->put('publish_up', now());
        }

        return parent::store($input);
    }


    public function storeParent(Collection $input)
    {
        return $this->store($input);
    }


    public function storeChild(Collection $input)
    {
        return $this->store($input);
    }
}
