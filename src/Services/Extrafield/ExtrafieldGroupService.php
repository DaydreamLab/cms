<?php

namespace DaydreamLab\Cms\Services\Extrafield;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldGroupRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class ExtrafieldGroupService extends BaseService
{
    protected $type = 'ExtrafieldGroup';

    public function __construct(ExtrafieldGroupRepository $repo)
    {
        parent::__construct($repo);
    }

    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->getModelName(), $input, $this->user));

        return $item;
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->get('id')), $this->getModelName(), $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

        event(new Remove($this->getModelName(), $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        event(new State($this->getModelName(), $result, $input, $this->user));

        return $result;
    }
}
