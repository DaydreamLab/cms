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


    public function __construct(SiteRepository $repo)
    {
        parent::__construct($repo);
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->getModelName(), $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input)
    {
        return parent::checkout($input);
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->id), $this->getModelName(), $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result =  parent::ordering($input);

        event(new Ordering($this->getModelName(), $result, $input, $this->user));

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
