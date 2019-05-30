<?php

namespace DaydreamLab\Cms\Services\Category;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\JJAJ\Events\Add;
use DaydreamLab\JJAJ\Events\Checkout;
use DaydreamLab\JJAJ\Events\Modify;
use DaydreamLab\JJAJ\Events\Ordering;
use DaydreamLab\JJAJ\Events\Remove;
use DaydreamLab\JJAJ\Events\State;
use DaydreamLab\JJAJ\Helpers\Helper;
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

    protected $model_name = 'Category';

    public function __construct(CategoryRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
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


    public function findDescendantOf($id)
    {
        return $this->repo->findDescendantOf($id);
    }


    public function getRelatedItems($itemService, $categories)
    {
        $category_ids = $categories instanceof \Illuminate\Support\Collection || $categories instanceof \Kalnoy\Nestedset\Collection ?
            $categories->map(function($item, $key){
            return $item->id;
        })->all() : [$categories->id];

        $category_items = $itemService->search(Helper::collect([
            'special_queries' => [
                [
                    'type'  => 'whereIn',
                    'key'   => 'category_id',
                    'value' => $category_ids
                ]
            ],
            'paginate'  => false
        ]));

        return $category_items;
    }


    public function modifyNested(Collection $input, $parent, $item)
    {
        $result = $this->traitModifiedNested($input, $parent, $item);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input,$this->user));

        return $result;
    }


    public function ordering(Collection $input, $diff = false)
    {
        $result =  parent::ordering($input, $diff);

        event(new Ordering($this->model_name, $result, $input, $this->user));

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


    public function store(Collection $input, $diff = false)
    {
        $result = $this->traitStoreNested($input, $diff);

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
