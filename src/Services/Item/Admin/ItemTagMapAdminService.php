<?php

namespace DaydreamLab\Cms\Services\Item\Admin;

use DaydreamLab\Cms\Repositories\Item\Admin\ItemTagMapAdminRepository;
use DaydreamLab\Cms\Services\Item\ItemTagMapService;

class ItemTagMapAdminService extends ItemTagMapService
{
    protected $type = 'ItemTagMapAdmin';

    public function __construct(ItemTagMapAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
