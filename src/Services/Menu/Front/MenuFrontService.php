<?php

namespace DaydreamLab\Cms\Services\Menu\Front;

use Carbon\Carbon;
use DaydreamLab\Cms\Repositories\Menu\Front\MenuFrontRepository;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\Cms\Services\MenuLog\MenuLogService;
use DaydreamLab\Cms\Services\Module\Front\ModuleFrontService;
use DaydreamLab\Cms\Services\Site\SiteService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class MenuFrontService extends MenuService
{
    protected $type = 'Front';

    protected $moduleFrontService;

    protected $siteService;

    public function __construct(
        MenuFrontRepository $repo,
        ModuleFrontService $moduleFrontService,
        SiteService $siteService,
        MenuLogService $menuLogService
    ) {
        parent::__construct($repo);
        $this->moduleFrontService = $moduleFrontService;
        $this->repo = $repo;
        $this->siteService = $siteService;
        $this->menuLogService = $menuLogService;
    }


    public function getItem($input)
    {
        if ($user = $input->get('user')) {
            $menu = $this->search(collect([
                'alias' => $input->get('alias'),
                'host'  => $input->get('host'),
            ]))->first();
            if (!$menu) {
                $this->status = 'GetItemSuccess';
                $this->response = null;
                return;
            }

            $q = new QueryCapsule();
            $q->where(function ($q) use ($input) {
                $q->whereIn('path', [
                    str_replace('https://' . $input->get('host'), '', $input->get('referer')),
                    str_replace('http://' . $input->get('host'), '', $input->get('referer'))
                ]);
            });
            $refererMenu = $this->search(collect([
                'host'  => $input->get('host'),
                'q' => $q
            ]))->first();
            if ($refererMenu) {
                $userLastLog = $this->menuLogService->search(collect([
                    'userId' => $user->id,
                    'menuId' => $refererMenu->id,
                    'limit'  => 1,
                ]))->first();
                if (
                    $userLastLog
                    && !$userLastLog->leaveAt
                    && Carbon::parse($userLastLog->created_at)->diffInSeconds(now()->toDateTimeString()) < 14400
                ) {
                    $this->repo->update($userLastLog, [
                        'leaveAt' => now()->toDateTimeString(),
                        'time'  => Carbon::parse($userLastLog->created_at)->diffInSeconds(now()->toDateTimeString())
                    ]);
                }
            }

            $q = new QueryCapsule();
            $q->whereNull('leaveAt')
                ->where(function ($q) {
                    $q->whereBetween('createdAt', now()->subHours(4)->toDateTimeString(), now()->toDateTimeString());
                });
            $sameLog = $this->menuLogService->search(collect([
                'userId' => $user->id,
                'menuId' => $menu->id,
                'limit'  => 1
            ]))->first();
            if (!$sameLog) {
                $this->menuLogService->add(collect([
                    'menuId' => $menu->id,
                    'refererId' => $refererMenu ? $refererMenu->id : null,
                    'userId'    => $user->id
                ]));
            }
        }
        $this->status = 'GetItemSuccess';
        $this->response = null;

        return $this->response;
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
        if (!$menu) {
            $this->status = 'GetItemFail';
            return false;
        }

        //$this->canAccess($menu->access, $this->getAccessIds());

        $modules = [];

        foreach ($menu->params as $key => $param) {
            if ($key == 'module_ids') {
                foreach ($param as $module_id) {
                    $module     = $this->moduleFrontService->find($module_id);
                    $language   = !InputHelper::null($input, 'language')
                        ? $input->get('language')
                        : config('daydreamlab.global.locale');
                    $data       = $this->moduleFrontService->loadModule($module, $language);
                    $module->items = $data;
                    $modules[$module->alias] = $module;
                }
            }
        }

        $this->status = 'GetItemSuccess';
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
        $input->put('access', $this->getAccessIds());

        $tree = $this->repo->getTree($input);

        $items = [];
        foreach ($tree as $item) {
            if (!array_key_exists($item->category->alias, $items)) {
                $items[$item->category->alias] = [];
            }
            $items[$item->category->alias][] = $item;
        }

        $this->status = 'GetTreeSuccess';
        $this->response = $items;

        return $tree;
    }
}
