<?php

namespace DaydreamLab\Cms\Services\Item\Admin;

use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Item\ItemService;

class ItemAdminService extends ItemService
{
    protected $type = 'ItemAdmin';

    public function __construct(ItemAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
