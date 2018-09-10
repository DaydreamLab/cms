<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Item\ItemService;

class ItemFrontService extends ItemService
{
    protected $type = 'ItemFront';

    public function __construct(ItemFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
