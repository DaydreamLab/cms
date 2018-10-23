<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemFrontService extends ItemService
{
    protected $type = 'ItemFront';

    public function __construct(ItemFrontRepository $repo)
    {
        parent::__construct($repo);
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
}
