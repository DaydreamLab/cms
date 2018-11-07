<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use DaydreamLab\Cms\Repositories\Item\Front\ItemTagMapFrontRepository;
use DaydreamLab\Cms\Services\Item\ItemTagMapService;

class ItemTagMapFrontService extends ItemTagMapService
{
    protected $type = 'ItemTagMapFront';

    public function __construct(ItemTagMapFrontRepository $repo)
    {
        parent::__construct($repo);
    }

}
