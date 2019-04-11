<?php

namespace DaydreamLab\Cms\Repositories\Menu\Front;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Models\Menu\Front\MenuFront;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class MenuFrontRepository extends MenuRepository
{
    public function __construct(MenuFront $model)
    {
        parent::__construct($model);
    }


    public function getMenu(Collection $input)
    {
        $query = $this->model;
        $query = $query->where('state', 1)
                        ->where('alias', $input->get('alias'))
                        ->where('host', $input->get('host'));

        if (InputHelper::null($input, 'language'))
        {
            $query = $query->where('language', '*');
        }
        else
        {
            $query = $query->whereIn('language', ['*', $input->get('language')]);
        }

        return $query->first();
    }


    public function getTree(Collection $input)
    {
        $query = $this->model;
        $query = $query->where('state', 1)
            ->where('host', $input->get('host'))
            ->whereIn('access', $input->get('access'));

        if (InputHelper::null($input, 'language'))
        {
            $query = $query->where('language', '*');
        }
        else
        {
            $query = $query->whereIn('language', ['*', $input->get('language')]);
        }

        
        return $query->get()->toTree();
    }
}