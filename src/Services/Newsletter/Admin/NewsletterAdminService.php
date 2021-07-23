<?php

namespace DaydreamLab\Cms\Services\Newsletter\Admin;

use DaydreamLab\Cms\Repositories\Newsletter\Admin\NewsletterAdminRepository;
use DaydreamLab\Cms\Services\Newsletter\NewsletterService;
use Illuminate\Support\Collection;

class NewsletterAdminService extends NewsletterService
{
    public function __construct(NewsletterAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function addMapping($item, $input)
    {
        $item_ids = [];

        $promotions = $input->get('promotion') ? $input->get('promotion') : [];
        $promotion_ids = array_map(function($promotion) {
            return $promotion['id'];
        }, $promotions);
        $item_ids = array_merge($item_ids, $promotion_ids);

        $bulletins = $input->get('bulletin') ? $input->get('bulletin') : [];
        $bulletin_ids = array_map(function($bulletin) {
            return $bulletin['id'];
        }, $bulletins);
        $item_ids = array_merge($item_ids, $bulletin_ids);

        if (count($item_ids)) {
            $item->items()->attach($item_ids);
        }
    }


    public function modifyMapping($item, $input)
    {
        $item_ids = [];
        if ( $input->get('promotion') !== null ) {
            $promotion_ids = array_map(function($promotion) {
                return $promotion['id'];
            }, $input->get('promotion'));
            $item_ids = array_merge($item_ids, $promotion_ids);
        }

        if ( $input->get('bulletin') !== null ) {
            $bulletin_ids = array_map(function($bulletin) {
                return $bulletin['id'];
            }, $input->get('bulletin'));
            $item_ids = array_merge($item_ids, $bulletin_ids);
        }

        $item->items()->sync($item_ids);
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
