<?php

namespace DaydreamLab\Cms\Services\IotCategory;

use DaydreamLab\Cms\Repositories\IotCategory\IotCategoryRepository;
use DaydreamLab\Cms\Services\CmsService;
use Illuminate\Support\Collection;

class IotCategoryService extends CmsService
{
    protected $modelName = 'IotCategory';

    public function __construct(IotCategoryRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function findDescendantOf($id)
    {
        return $this->repo->findDescendantOf($id);
    }


    public function add(Collection $input)
    {
        $item = parent::addNested($input);

        //event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function modify(Collection $input)
    {
        $item = $this->checkItem($input);

        $result = parent::modifyNested($input, $item->parent, $item);

        //event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result = parent::ordering($input);

        //event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

        return $result;
    }


    public function orderingNested(Collection $input)
    {
        $result = parent::orderingNested($input);

        //event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::removeNested($input);

        //event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function restore(Collection $input)
    {
        $result = parent::restore($input);

        //event(new Checkout($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        //event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function store(Collection $input)
    {
        return parent::storeNested($input);
    }
}
