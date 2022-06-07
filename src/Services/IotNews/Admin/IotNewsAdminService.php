<?php

namespace DaydreamLab\Cms\Services\IotNews\Admin;

use DaydreamLab\Cms\Repositories\IotNews\Admin\IotNewsAdminRepository;
use DaydreamLab\Cms\Services\IotNews\IotNewsService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use Illuminate\Support\Collection;

class IotNewsAdminService extends IotNewsService
{
    use CmsCronJob;

    public function __construct(IotNewsAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
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
        $item->tags()->detach();
        $item->solutions()->detach();
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
        $this->response = $result;
        $this->setCronJob($input, $result);
        return $result;
    }
}
