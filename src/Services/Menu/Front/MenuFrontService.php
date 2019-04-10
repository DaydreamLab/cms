<?php

namespace DaydreamLab\Cms\Services\Menu\Front;

use DaydreamLab\Cms\Repositories\Menu\Front\MenuFrontRepository;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\Cms\Services\Module\Front\ModuleFrontService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class MenuFrontService extends MenuService
{
    protected $type = 'MenuFront';

    protected $moduleFrontService;


    public function __construct(MenuFrontRepository $repo,
                                ModuleFrontService $moduleFrontService)
    {
        parent::__construct($repo);
        $this->moduleFrontService = $moduleFrontService;
        $this->repo = $repo;
    }


    public function getMenu(Collection $input)
    {
        $menu = $this->repo->getMenu($input);

        if (!$menu)
        {
            $this->status = Str::upper(Str::snake($this->type.'GetItemFail'));
            return false;
        }

        if (!Helper::hasPermission($menu->viewlevels, $this->viewlevels)) {
            $this->status = Str::upper(Str::snake($this->type . 'InsufficientPermission'));
            $this->response = null;
            return false;
        }

        $modules = [];

        foreach ($menu->params as $key => $param)
        {
            if ($key == 'module_ids')
            {
                foreach ($param as $module_id)
                {
                    $module = $this->moduleFrontService->find($module_id);
                    $data   = $this->moduleFrontService->loadModule($module);
                    $modules[$module->alias] = $data;
                }
            }
        }

        $this->status = Str::upper(Str::snake($this->type.'GetItemSuccess'));
        $this->response = $modules;

        return true;
    }


    public function getTree(Collection $input)
    {
        $input->put('access', $this->access_ids);

        $tree = $this->repo->getTree($input);

        $items = [];
        foreach ($tree as $item)
        {
            if (!array_key_exists($item->category->alias, $items))
            {
                $items[$item->category->alias] = [];
            }
            $items[$item->category->alias][] = $item;
        }


        $this->status = Str::upper(Str::snake($this->type.'GetTreeSuccess'));
        $this->response = $items;

        return $tree;
    }

}
