<?php

namespace DaydreamLab\Cms\Services\Menu\Front;

use DaydreamLab\Cms\Repositories\Menu\Front\MenuFrontRepository;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\Cms\Services\Module\Front\ModuleFrontService;
use DaydreamLab\Cms\Services\Site\SiteService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class MenuFrontService extends MenuService
{
    protected $type = 'Front';

    protected $moduleFrontService;

    protected $siteService;


    public function __construct(MenuFrontRepository $repo,
                                ModuleFrontService $moduleFrontService,
                                SiteService $siteService)
    {
        parent::__construct($repo);
        $this->moduleFrontService = $moduleFrontService;
        $this->repo = $repo;
        $this->siteService = $siteService;
    }


    public function getMenu(Collection $input)
    {
        $site = $this->siteService->search(Helper::collect([
            'url'       => $input->get('host'),
            'sef'       => $input->get('language'),
            'paginate'  => false
        ]))->first();

        $input->put('site_id', $site->id);

        $menu = $this->repo->getMenu($input);

        if (!$menu)
        {
            $this->status = Str::upper(Str::snake($this->type.'GetItemFail'));
            return false;
        }

        $this->canAccess($menu->access, $this->access_ids);

        $modules = [];

        foreach ($menu->params as $key => $param)
        {
            if ($key == 'module_ids')
            {
                foreach ($param as $module_id)
                {
                    $module     = $this->moduleFrontService->find($module_id);
                    $language   = !InputHelper::null($input, 'language') ? $input->get('language') : config('daydreamlab.global.locale');
                    $data       = $this->moduleFrontService->loadModule($module, $language);
                    $module->items = $data;
                    $modules[$module->alias] = $module;
                }
            }
        }

        $this->status = Str::upper(Str::snake($this->type.'GetItemSuccess'));
        $this->response = $modules;

        return true;
    }


    public function getTree(Collection $input)
    {
        $site = $this->siteService->search(Helper::collect([
            'url' => $input->get('host'),
            'sef' => $input->get('language')
        ]))->first();

        $input->put('site_id', $site->id);
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
