<?php

namespace DaydreamLab\Cms\Services\Item;

use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Featured;
use DaydreamLab\Cms\Events\Ordering;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemService extends BaseService
{
    protected $package = 'Cms';

    protected $modelName = 'Item';

    protected $modelType = 'Base';


    public function __construct(ItemRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->getServiceName(), $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input)
    {
        return parent::checkout($input);
    }


    public function featured(Collection $input)
    {
        $result = false;
        foreach ($input->get('ids') as $id)
        {
            $item = $this->checkItem(collect(['id' => $id]));
            $result =  $this->repo->featured($item, $input->get('featured'));
            if(!$result) break;
        }


        $action = $input->get('featured') == 0 ? 'Unfeatured' : 'Featured';
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

        event(new Featured($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->get('id')), $this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result = parent::ordering($input);

        event(new Ordering($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

        event(new Remove($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        event(new State($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }
}
