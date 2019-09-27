<?php

namespace DaydreamLab\Cms\Services\Category;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\JJAJ\Events\Add;
use DaydreamLab\JJAJ\Events\Modify;
use DaydreamLab\JJAJ\Events\Ordering;
use DaydreamLab\JJAJ\Events\Remove;
use DaydreamLab\JJAJ\Events\State;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class CategoryService extends BaseService
{
    use NestedServiceTrait {
        NestedServiceTrait::addNested       as traitAddNested;
        NestedServiceTrait::modifyNested    as traitModifiedNested;
        NestedServiceTrait::storeNested     as traitStoreNested;
        NestedServiceTrait::removeNested    as traitRemoveNested;
    }

    protected $type = 'Category';

    public function __construct(CategoryRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
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


    public function findDescendantOf($id)
    {
        return $this->repo->findDescendantOf($id);
    }


    public function modifyNested(Collection $input, $parent, $item)
    {
        $result = $this->traitModifiedNested($input, $parent, $item);

        event(new Modify($this->find($input->get('id')), $this->getServiceName(), $result, $input,$this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result =  parent::ordering($input);

        event(new Ordering($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input ,$diff = false)
    {
        $result = $this->traitRemoveNested($input);

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
        $result = $this->traitStoreNested($input);

        return $result;
    }


    public function tree($extension)
    {
        $tree = $this->findBy('extension', '=', $extension)->toTree();

        $this->status =  Str::upper(Str::snake($this->type . 'GetTreeSuccess'));
        $this->response = $tree;

        return $tree;
    }

}
