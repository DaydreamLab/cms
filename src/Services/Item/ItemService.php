<?php

namespace DaydreamLab\Cms\Services\Item;

use DaydreamLab\JJAJ\Events\Add;
use DaydreamLab\JJAJ\Events\Checkout;
use DaydreamLab\JJAJ\Events\Featured;
use DaydreamLab\JJAJ\Events\Ordering;
use DaydreamLab\JJAJ\Events\Remove;
use DaydreamLab\JJAJ\Events\State;
use DaydreamLab\JJAJ\Events\Modify;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemService extends BaseService
{
    protected $type = 'Item';

    protected $model_name = 'Item';

    protected $itemTagMapService;


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input)
    {
        $result = parent::checkout($input);

        event(new Checkout($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function featured(Collection $input)
    {
        $result = $this->repo->featured($input);

        if ($result)
        {
            $this->status   = Str::upper(Str::snake($this->type.'FeaturedSuccess'));
            $this->response = null;
        }
        else
        {
            $this->status   = Str::upper(Str::snake($this->type.'FeaturedSuccess'));
            $this->response = null;
        }

        event(new Featured($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input, $orderingKey = 'ordering')
    {
        $result = parent::ordering($input, $orderingKey);

        event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

        event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function unfeatured(Collection $input)
    {
        $feature = $this->repo->unfeatured($input);
        if ($feature)
        {
            $this->status   = Str::upper(Str::snake($this->type.'UnfeaturedSuccess'));
            $this->response = null;
        }
        else
        {
            $this->status   = Str::upper(Str::snake($this->type.'UnfeaturedSuccess'));
            $this->response = null;
        }
    }

}
