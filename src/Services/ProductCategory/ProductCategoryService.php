<?php

namespace DaydreamLab\Cms\Services\ProductCategory;

use DaydreamLab\Cms\Repositories\ProductCategory\ProductCategoryRepository;
use DaydreamLab\Cms\Services\cmsService;
use Illuminate\Support\Collection;

class ProductCategoryService extends cmsService
{
    protected $modelName = 'ProductCategory';

    public function __construct(ProductCategoryRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function add(Collection $input)
    {
        $item = parent::addNested($input);

        //event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function findDescendantOf($id)
    {
        return $this->repo->findDescendantOf($id);
    }



    public function modify(Collection $input)
    {
        $item = $this->checkItem($input);

        $result = parent::modifyNested($input, $item->parent, $item);$result =  parent::modify($input);

        //event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result = parent::orderingNested($input);

        //event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

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
        $result = $this->storeNested($input);

        return $result;
    }
}
