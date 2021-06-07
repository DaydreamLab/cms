<?php

namespace DaydreamLab\Cms\Services\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\Admin\ExtrafieldAdminRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;
use Illuminate\Support\Collection;

class ExtrafieldAdminService extends ExtrafieldService
{
    protected $extrafiledGroupAdminService;

    public function __construct(
        ExtrafieldAdminRepository $repo,
        ExtrafieldGroupAdminService  $extrafieldGroupAdminService
    )
    {
        parent::__construct($repo);
        $this->repo = $repo;
        $this->extrafiledGroupAdminService = $extrafieldGroupAdminService;
    }


    public function store(Collection $input)
    {
        $this->extrafiledGroupAdminService->checkItem(collect(['id' => $input->get('group_id')]));

        return parent::store($input);
    }
}
