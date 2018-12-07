<?php

namespace DaydreamLab\Cms\Services\Module;

use DaydreamLab\Cms\Repositories\Module\ModuleRepository;
use DaydreamLab\JJAJ\Events\Add;
use DaydreamLab\JJAJ\Events\Checkout;
use DaydreamLab\JJAJ\Events\Modify;
use DaydreamLab\JJAJ\Events\Ordering;
use DaydreamLab\JJAJ\Events\Remove;
use DaydreamLab\JJAJ\Events\State;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class ModuleService extends BaseService
{
    protected $type = 'Module';

    protected $model_name = 'Module';


    public function __construct(ModuleRepository $repo)
    {
        parent::__construct($repo);
    }


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


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

        event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }
}
