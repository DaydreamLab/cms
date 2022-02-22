<?php

namespace DaydreamLab\Cms\Services\IotResource\Admin;

use DaydreamLab\Cms\Repositories\IotResource\Admin\IotResourceAdminRepository;
use DaydreamLab\Cms\Services\IotResource\IotResourceService;
use Illuminate\Support\Collection;

class IotResourceAdminService extends IotResourceService
{
    public function __construct(IotResourceAdminRepository $repo)
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

        $solutions = $input->get('solutions') ? $input->get('solutions') : [];
        if (count($solutions)) {
            $item->solutions()->attach(array_map(function($i) {
                return $i['id'];
            }, $solutions));
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


        if ( $input->get('solutions') !== null ) {
            $item->solutions()->sync(array_map(function($i) {
                return $i['id'];
            }, $input->get('solutions')));
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

        $result = parent::store($input);
        if ( $id = $input->get('id') ) {
            $result = $this->find($id);
        }
        return $result;
    }
}
