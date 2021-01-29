<?php

namespace DaydreamLab\Cms\Services\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\Admin\ExtrafieldAdminRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;
use Illuminate\Support\Collection;

class ExtrafieldAdminService extends ExtrafieldService
{
    protected $modelType = 'Admin';

    protected $search_keys = ['title', 'description'];

    public function __construct(ExtrafieldAdminRepository $repo)
    {
        parent::__construct($repo);
    }

    public function getItem($id)
    {
        $this->repo->with('group');

        $item = parent::getItem($id)->makeHidden(['group']);

        $item->group_title = $item->group->title;

        return $item;
    }


    public function store(Collection $input)
    {
        $this->checkItem(collect(['id' => $input->get('group_id')]));

        return parent::store($input);
    }

}
