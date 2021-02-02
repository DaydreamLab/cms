<?php

namespace DaydreamLab\Cms\Services\Category;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\JJAJ\Events\Add;
use DaydreamLab\JJAJ\Events\Modify;
use DaydreamLab\JJAJ\Events\Ordering;
use DaydreamLab\JJAJ\Events\Remove;
use DaydreamLab\JJAJ\Events\State;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class CategoryService extends CmsService
{
    use NestedServiceTrait;

    protected $modelName = 'Category';

    protected $modelType = 'Base';

    public function __construct(CategoryRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }

    public function addNested(Collection $input)
    {
        $item = $this->addNested($input);

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
        $result = $this->modifyNested($input, $parent, $item);

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
