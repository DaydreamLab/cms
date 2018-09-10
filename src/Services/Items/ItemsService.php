<?php

namespace DaydreamLab\Cms\Services\Items;

use DaydreamLab\Cms\Repositories\Items\ItemsRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class ItemsService extends BaseService
{
    protected $type = 'Items';

    public function __construct(ItemsRepository $repo)
    {
        parent::__construct($repo);
    }
}
