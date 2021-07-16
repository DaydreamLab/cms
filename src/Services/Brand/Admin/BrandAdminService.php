<?php

namespace DaydreamLab\Cms\Services\Brand\Admin;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use Illuminate\Support\Collection;

class BrandAdminService extends BrandService
{
    public function __construct(BrandAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $tags = $input->get('tags') ? $input->get('tags') : [];
        $tagIds = array_map(function($tag) {
            return $tag['id'];
        }, $tags);
        if (count($tagIds)) {
            $item->tags()->attach($tagIds);
        }
    }


    public function modifyMapping($item, $input)
    {
        if ( $input->get('tags') !== null ) {
            $tagIds = array_map(function($tag) {
                return $tag['id'];
            }, $input->get('tags'));
            $item->tags()->sync($tagIds);
        }
    }


    public function store(Collection $input)
    {
        $result = parent::store($input);

        if ($input->has('id')) {
            $result = $this->find($input->get('id'));
        }

        $this->response = $result;
        return $this->response;
    }
}