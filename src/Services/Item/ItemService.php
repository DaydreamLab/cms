<?php

namespace DaydreamLab\Cms\Services\Item;

use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Checkout;
use DaydreamLab\Cms\Events\Featured;
use DaydreamLab\Cms\Events\Ordering;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemService extends BaseService
{
    protected $type = 'Item';

    protected $model_name = 'Item';

    protected $itemTagMapService;

    public function __construct(ItemRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input, $diff = false)
    {
        return parent::checkout($input, $diff);
    }


    public function featured(Collection $input, $diff = false)
    {
        $result = false;
        foreach ($input->ids as $id)
        {
            $item = $this->checkItem($id, $diff);
            $this->checkAction($item, 'edit', $diff);
            $this->checkAction($item, 'updateFeatured');

            $result =  $this->repo->featured($item, $input->get('featured'));
            if(!$result) break;
        }


        $action = $input->featured == 0 ? 'Unfeatured' : 'Featured';
        if ($result)
        {
            $this->status   = Str::upper(Str::snake($this->type.$action.'Success'));
            $this->response = null;
        }
        else
        {
            $this->status   = Str::upper(Str::snake($this->type.$action.'Fail'));
            $this->response = null;
        }

        event(new Featured($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function modify(Collection $input, $diff = false)
    {
        $result =  parent::modify($input, $diff);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input, $diff = false)
    {
        $result = parent::ordering($input, $diff);

        event(new Ordering($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input, $diff = false)
    {
        $result =  parent::remove($input, $diff);

        event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input, $items = null)
    {
        $result = parent::state($items, $input->get('state'));

        event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }
}
