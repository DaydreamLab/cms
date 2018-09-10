<?php

namespace DaydreamLab\Cms\Services\Item;

use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class ItemService extends BaseService
{
    protected $type = 'Item';

    public function __construct(ItemRepository $repo)
    {
        parent::__construct($repo);
    }
}
