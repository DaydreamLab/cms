<?php

namespace DaydreamLab\Cms\Services\Menu;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Ordering;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;

class MenuService extends CmsService
{
    use NestedServiceTrait {
        NestedServiceTrait::modifyNested as traitModifyNested;
    }

    protected $package = 'Cms';

    protected $modelName = 'Menu';

    protected $modelType = 'Base';

    public function __construct(MenuRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function add(Collection $input)
    {
        $item = $this->addNested($input);

        event(new Add($item, $this->getServiceName(), $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input)
    {
        return parent::checkout($input);
    }


    public function modifyNested(Collection $input, $parent, $item)
    {
        $result = $this->traitModifyNested($input, $parent, $item);

        event(new Modify($this->find($input->get('id')), $this->getServiceName(), $result, $input,$this->user));

        return $result;
    }


    public function remove(Collection $input ,$diff = false)
    {
        $result = $this->removeNested($input);

        event(new Remove($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result =  parent::ordering($input);

        event(new Ordering($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input = null)
    {
        $result = parent::state($input);

        event(new State($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function store(Collection $input)
    {
        $result = $this->storeNested($input);

        return $result;
    }
}
