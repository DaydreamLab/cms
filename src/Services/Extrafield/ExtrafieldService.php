<?php

namespace DaydreamLab\Cms\Services\Extrafield;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldRepository;
use DaydreamLab\JJAJ\Events\Add;
use DaydreamLab\JJAJ\Events\Modify;
use DaydreamLab\JJAJ\Events\Remove;
use DaydreamLab\JJAJ\Events\State;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class ExtrafieldService extends BaseService
{
    protected $type = 'Extrafield';

    protected $model_name = 'Extrafield';

    public function __construct(ExtrafieldRepository $repo)
    {
        parent::__construct($repo);
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

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
}
