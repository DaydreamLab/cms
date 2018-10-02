<?php

namespace DaydreamLab\Cms\Services\Item;

use DaydreamLab\Cms\Repositories\Item\ItemTagMapRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class ItemTagMapService extends BaseService
{
    protected $type = 'ItemTagMap';

    public function __construct(ItemTagMapRepository $repo)
    {
        parent::__construct($repo);
    }
}
