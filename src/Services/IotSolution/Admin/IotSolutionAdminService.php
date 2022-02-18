<?php

namespace DaydreamLab\Cms\Services\IotSolution\Admin;

use DaydreamLab\Cms\Repositories\IotSolution\Admin\IotSolutionAdminRepository;
use DaydreamLab\Cms\Services\IotSolution\IotSolutionService;
use Illuminate\Support\Collection;

class IotSolutionAdminService extends IotSolutionService
{
    public function __construct(IotSolutionAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $categories = $input->get('categories') ? $input->get('categories') : [];
        if (count($categories)) {
            $item->categories()->attach(array_map(function($i) {
                return $i['id'];
            }, $categories));
        }

        $industries = $input->get('industries') ? $input->get('industries') : [];
        if (count($industries)) {
            $item->industries()->attach(array_map(function($i) {
                return $i['id'];
            }, $industries));
        }

        $tags = $input->get('tags') ? $input->get('tags') : [];
        if (count($tags)) {
            $item->tags()->attach(array_map(function($i) {
                return $i['id'];
            }, $tags));
        }
    }


    public function modifyMapping($item, $input)
    {
        if ( $input->get('categories') !== null ) {
            $item->categories()->sync(array_map(function($i) {
                return $i['id'];
            }, $input->get('categories')));
        }

        if ( $input->get('industries') !== null ) {
            $item->industries()->sync(array_map(function($i) {
                return $i['id'];
            }, $input->get('industries')));
        }

        if ( $input->get('tags') !== null ) {
            $item->tags()->sync(array_map(function($i) {
                return $i['id'];
            }, $input->get('tags')));
        }
    }


    public function removeMapping($item)
    {
        $item->categories()->detach();
        $item->industries()->detach();
        $item->tags()->detach();
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


    public function store(Collection $input)
    {
        if ( $input->get('state') == 1 && $input->get('publish_up') == null ) {
            $input->put('publish_up', now());
        }

        return parent::store($input);
    }
}
