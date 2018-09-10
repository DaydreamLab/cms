<?php

namespace DaydreamLab\Cms\Services\Items\Front;

use DaydreamLab\Cms\Repositories\Items\Front\ItemsFrontRepository;
use DaydreamLab\Cms\Services\Items\ItemsService;

class ItemsFrontService extends ItemsService
{
    protected $type = 'ItemsFront';

    public function __construct(ItemsFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
