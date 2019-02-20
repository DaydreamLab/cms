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

        if (InputHelper::null($input, 'sef'))
        {
            $query = $query->where('language', '*');
        }
        else
        {
            $query = $query->where('language', $input->get('sef'));
        }

        return $query->first();
    }
}