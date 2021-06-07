<?php

namespace DaydreamLab\Cms\Services\Menu;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\User\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use Illuminate\Support\Collection;

class MenuService extends CmsService
{
    use WithCategory, WithLanguage, WithAccess;

    protected $modelName = 'Menu';

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


    public function restore(Collection $input)
    {
        return parent::restore($input);
    }


    public function modify(Collection $input)
    {
        $item = $this->checkItem($input);

        $result = parent::modifyNested($input, $item->parent, $item);

        event(new Modify($this->find($input->get('id')), $this->getServiceName(), $result, $input,$this->user));

        return $result;
    }


    public function remove(Collection $input ,$diff = false)
    {
        $result = $this->removeNested($input);

        event(new Remove($this->getServiceName(), $result, $input, $this->user));

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
