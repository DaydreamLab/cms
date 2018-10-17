<?php

namespace DaydreamLab\Cms\Services\Menu\Front;

use DaydreamLab\Cms\Repositories\Menu\Front\MenuFrontRepository;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;

class MenuFrontService extends MenuService
{
    protected $type = 'MenuFront';

    public function __construct(MenuFrontRepository $repo)
    {
        parent::__construct($repo);
    }


    public function getItemByPath($path)
    {
        $menu = parent::getItemByPath($path);
        Helper::show($menu->toArray());
        exit();
    }
}
