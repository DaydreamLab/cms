<?php

namespace DaydreamLab\Cms\Services\Site;

use DaydreamLab\Cms\Repositories\Site\SiteRepository;
use DaydreamLab\JJAJ\Events\Add;
use DaydreamLab\JJAJ\Events\Modify;
use DaydreamLab\JJAJ\Events\Ordering;
use DaydreamLab\JJAJ\Events\Remove;
use DaydreamLab\JJAJ\Events\State;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class SiteService extends BaseService
{
    protected $type = 'Site';

    protected $model_name = 'Site';

    public function __construct(SiteRepository $repo)
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

}
