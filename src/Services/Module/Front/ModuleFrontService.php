<?php

namespace DaydreamLab\Cms\Services\Module\Front;

use DaydreamLab\Cms\Repositories\Module\Front\ModuleFrontRepository;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\JJAJ\Helpers\Helper;

class ModuleFrontService extends ModuleService
{
    protected $type = 'ModuleFront';

    protected $itemFrontService;

    public function __construct(ModuleFrontRepository $repo,
                                ItemFrontService $itemFrontService)
    {
        $this->itemFrontService = $itemFrontService;
        parent::__construct($repo);
    }


    public function loadModule($module)
    {
        if ($module->category->alias == 'selected-items')
        {
            $items = $this->itemFrontService->getSelectedItems(array_values($module->params['item_ids']));
        }
        elseif ($module->category->alias == 'news')
        {
            $items = $this->itemFrontService->getNewsItems($module->params);

        }
        return $items;
    }
}
