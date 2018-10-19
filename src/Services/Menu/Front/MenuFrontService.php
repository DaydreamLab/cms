<?php

namespace DaydreamLab\Cms\Services\Menu\Front;

use DaydreamLab\Cms\Repositories\Menu\Front\MenuFrontRepository;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\Cms\Services\Module\Front\ModuleFrontService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Str;

class MenuFrontService extends MenuService
{
    protected $type = 'MenuFront';

    protected $moduleFrontService;


    public function __construct(MenuFrontRepository $repo,
                                ModuleFrontService $moduleFrontService)
    {
        $this->moduleFrontService = $moduleFrontService;
        parent::__construct($repo);
    }


    public function getItemByPath($path)
    {
        $menu = parent::getItemByPath($path);
        if (!$menu)
        {
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


}
