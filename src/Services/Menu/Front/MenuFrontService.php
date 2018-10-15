<?php

namespace DaydreamLab\Cms\Services\Menu\Front;

use DaydreamLab\Cms\Repositories\Menu\Front\MenuFrontRepository;
use DaydreamLab\Cms\Services\Menu\MenuService;

class MenuFrontService extends MenuService
{
    protected $type = 'MenuFront';

    public function __construct(MenuFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
