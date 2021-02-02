<?php

namespace DaydreamLab\Cms\Services\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\Admin\ExtrafieldAdminRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;
use Illuminate\Support\Collection;

class ExtrafieldAdminService extends ExtrafieldService
{
    protected $modelType = 'Admin';

    protected $extrafiledGroupAdminService;

    protected $search_keys = ['title', 'description'];

    public function __construct(
        ExtrafieldAdminRepository $repo,
        ExtrafieldGroupAdminService  $extrafieldGroupAdminService
    )
    {
        parent::__construct($repo);
        $this->repo = $repo;
        $this->extrafiledGroupAdminService = $extrafieldGroupAdminService;
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
        $this->extrafiledGroupAdminService->checkItem(collect(['id' => $input->get('group_id')]));

        return parent::store($input);
    }

}
