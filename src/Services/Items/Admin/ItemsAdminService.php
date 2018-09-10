<?php

namespace DaydreamLab\Cms\Services\Items\Admin;

use DaydreamLab\Cms\Repositories\Items\Admin\ItemsAdminRepository;
use DaydreamLab\Cms\Services\Items\ItemsService;

class ItemsAdminService extends ItemsService
{
    protected $type = 'ItemsAdmin';

    public function __construct(ItemsAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
