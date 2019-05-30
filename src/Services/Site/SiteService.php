<?php

namespace DaydreamLab\Cms\Services\Site;

use DaydreamLab\Cms\Events\Checkout;
use DaydreamLab\Cms\Repositories\Site\SiteRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Ordering;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\JJAJ\Helpers\Helper;
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


    public function checkout(Collection $input, $diff = false)
    {
        return parent::checkout($input, $diff);
    }


    public function modify(Collection $input, $diff = false)
    {
        $result =  parent::modify($input, $diff);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input, $diff = false)
    {
        $result =  parent::ordering($input, $diff);

        event(new Ordering($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input, $diff = false)
    {
        $result =  parent::remove($input, $diff);

        event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input, $diff = false)
    {
        $result = parent::state($input, $diff);

        event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }

}
