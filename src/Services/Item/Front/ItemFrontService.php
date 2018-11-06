<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemFrontService extends ItemService
{
    protected $type = 'ItemFront';

    public function __construct(ItemFrontRepository $repo)
    {
        parent::__construct($repo);
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);
        if ($item)
        {
            $prev_and_next  = $this->repo->getPreviousAndNext($item);
            $item->previous =  $prev_and_next['previous'];
            $item->next     =  $prev_and_next['next'];
            $this->response = $item;
            return $item;
        }
        return false;
    }


    public function getMenuItems($params)
    {
        return $this->repo->getMenuItems($params);
    }


    public function getNewsItems($params)
    {
        return $this->repo->getNewsItems($params);
    }


    public function getNext(Collection $input)
    {
        $next_id = $this->repo->getPreviousOrNext($input, false);
        if ($next_id)
        {
            return $this->getItem($next_id);
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'ItemNotExist'));
            $this->response = null;
            return false;
        }
    }


    public function getPrevious(Collection $input)
    {
        $previous_id = $this->repo->getPreviousOrNext($input, true);

        if ($previous_id)
        {
            return $this->getItem($previous_id);
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'ItemNotExist'));
            $this->response = null;
            return false;
        }
    }


    public function getSelectedItem($id)
    {
        return $this->repo->getSelectedItem($id);
    }


    public function getSelectedItems($ids)
    {
        return $this->repo->getSelectedItems($ids);
    }


    public function getTimelineItems($params)
    {
        return $this->repo->getTimelineItems($params);
    }


    public function search(Collection $input)
    {
        $special_queries = [];
        if (!InputHelper::null($input, 'year'))
        {
            $year = $input->year;
            $input->forget('year');
            $obj['type']        = 'whereYear';
            $obj['key']         = 'publish_up';
            $obj['value']       = $year;
            $special_queries[]  = $obj;
        }

        if (!InputHelper::null($input, 'month'))
        {
            $month = $input->month;
            $input->forget('month');
            $obj['type']        = 'whereMonth';
            $obj['key']         = 'publish_up';
            $obj['value']       = $month;
            $special_queries[]  = $obj;
        }


        $input->put('special_queries', $special_queries);

        return parent::search($input);
    }
}
