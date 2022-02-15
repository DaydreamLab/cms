<?php

namespace DaydreamLab\Cms\Services\IotCategory\Admin;

use DaydreamLab\Cms\Repositories\IotCategory\Admin\IotCategoryAdminRepository;
use DaydreamLab\Cms\Services\IotCategory\IotCategoryService;
use Illuminate\Support\Collection;

class IotCategoryAdminService extends IotCategoryService
{
    public function __construct(IotCategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {   // TODO: 檢查 floor 避免 下層變成上層的 parent
        $child_ids = array_map(function($child) {
            return $child['id'];
        }, $input->get('children') ? $input->get('children') : []);
        if (count($child_ids)) {
            $item->childCategories()->attach($child_ids);
        }
    }


    public function modifyMapping($item, $input)
    {
        if ( $input->get('children') !== null ) {
            $child_ids = array_map(function($child) {
                return $child['id'];
            }, $input->get('children'));
            $item->childCategories()->sync($child_ids);
        }
    }


    public function removeMapping($item)
    {
        $item->childCategories()->detach();
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
        $q = $q->where('floor', 1);
        $input->put('q', $q);
        return $this->search($input);
    }


    public function searchChild(Collection $input)
    {
        $q = $input->get('q');
        $q = $q->where('floor', 2);
        $input->put('q', $q);
        return $this->search($input);
    }


    public function store(Collection $input)
    {
        if ( $input->get('state') == 1 && $input->get('publish_up') == null ) {
            $input->put('publish_up', now());
        }

        return parent::store($input);
    }
}
