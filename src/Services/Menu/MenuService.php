<?php

namespace DaydreamLab\Cms\Services\Menu;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Ordering;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\Cms\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;

class MenuService extends BaseService
{
    use WithCategory, WithLanguage, WithAccess,
        NestedServiceTrait {
        NestedServiceTrait::addNested       as traitAddNested;
        NestedServiceTrait::modifyNested    as traitModifiedNested;
        NestedServiceTrait::storeNested     as traitStoreNested;
        NestedServiceTrait::removeNested    as traitRemoveNested;
    }

    protected $type = 'Menu';

    public function __construct(MenuRepository $repo)
    {
        parent::__construct($repo);
    }


    public function addNested(Collection $input)
    {
        $item = $this->traitAddNested($input);

        event(new Add($item, $this->getServiceName(), $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input)
    {
        return parent::checkout($input);
    }


    public function modifyNested(Collection $input, $parent, $item)
    {
        $result = $this->traitModifiedNested($input, $parent, $item);

        event(new Modify($this->find($input->id), $this->getServiceName(), $result, $input,$this->user));

        return $result;
    }


    public function remove(Collection $input ,$diff = false)
    {
        $result = $this->traitRemoveNested($input);

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
        $result = $this->traitStoreNested($input);

        return $result;
    }
}
