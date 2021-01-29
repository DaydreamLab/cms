<?php

namespace DaydreamLab\Cms\Services\Menu\Admin;

use DaydreamLab\Cms\Repositories\Menu\Admin\MenuAdminRepository;
use DaydreamLab\Cms\Services\Menu\MenuService;
use Illuminate\Support\Collection;

class MenuAdminService extends MenuService
{
    protected $modelType = 'Admin';

    protected $search_keys = ['title', 'description'];

    public function __construct(MenuAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function store(Collection $input)
    {
        return parent::store($input);
    }
}
