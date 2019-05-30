<?php

namespace DaydreamLab\Cms\Services\Tag;

use DaydreamLab\Cms\Repositories\Tag\TagRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Checkout;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Ordering;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;

class TagService extends BaseService
{
    use NestedServiceTrait {
        NestedServiceTrait::addNested       as traitAddNested;
        NestedServiceTrait::modifyNested    as traitModifiedNested;
        NestedServiceTrait::storeNested     as traitStoreNested;
        NestedServiceTrait::removeNested    as traitRemoveNested;
    }

    protected $type = 'Tag';

    protected $model_name = 'Tag';

    public function __construct(TagRepository $repo)
    {
        parent::__construct($repo);
    }


    public function addNested(Collection $input)
    {
        $item = $this->traitAddNested($input);

        event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function checkout(Collection $input, $diff = false)
    {
        return parent::checkout($input, $diff);
    }


    public function modifyNested(Collection $input, $parent, $item)
    {
        $result = $this->traitModifiedNested($input, $parent, $item);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input,$this->user));

        return $result;
    }


    public function remove(Collection $input ,$diff = false)
    {
        $result = $this->traitRemoveNested($input, $diff);

        event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input, $diff = null)
    {
        $result = parent::state($input, $diff);

        event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input, $diff = false)
    {
        $result =  parent::ordering($input, $diff);

        event(new Ordering($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function store(Collection $input, $diff = false)
    {
        $result = $this->traitStoreNested($input, $diff);

        return $result;
    }

}
