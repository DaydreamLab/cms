<?php

namespace DaydreamLab\Cms\Services\Menu;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Checkout;
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
        NestedServiceTrait::orderingNested  as traitOrderingNested;
    }

    protected $type = 'Menu';

    protected $model_name = 'Menu';

    public function __construct(MenuRepository $repo)
    {
        parent::__construct($repo);
    }

    public function addNested(Collection $input)
    {
        $item = $this->traitAddNested($input);

        event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input)
    {
        $result = parent::checkout($input);

        event(new Checkout($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function modifyNested(Collection $input)
    {
        $result = $this->traitModifiedNested($input);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input,$this->user));

        return $result;
    }



    public function remove(Collection $input)
    {
        $tree_ids = [];
        foreach ($input->ids as $id)
        {
            $item = $this->find($id);
            if (!in_array($item->id, $tree_ids))
            {
                $tree_ids[] = $item->id;
            }

            $subtree = $this->findByChain(['_lft', '_rgt'], ['>', '<'], [$item->_lft, $item->_rgt]);
            foreach ($subtree as $value)
            {
                if (!in_array($value->id, $tree_ids))
                {
                    $tree_ids[] = $value->id;
                }
            }
        }

        $result = $this->traitRemoveNested($input);

        $input->forget('ids');
        $input->ids = $tree_ids;

        event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input, $orderingKey = 'ordering')
    {
        $result = $this->traitOrderingNested($input, $orderingKey);

        event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function store(Collection $input)
    {
        return $this->traitStoreNested($input);
    }
}
