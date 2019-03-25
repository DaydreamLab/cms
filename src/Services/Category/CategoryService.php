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
        NestedServiceTrait::orderingNested  as traitOrderingNested;
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


    public function checkout(Collection $input)
    {
        $result = parent::checkout($input);

        event(new Checkout($this->model_name, $result, $input, $this->user));

        return $result;
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


    public function modifyNested(Collection $input)
    {
        $result = $this->traitModifiedNested($input);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input,$this->user));

        return $result;
    }


    public function ordering(Collection $input, $orderingKey = 'ordering')
    {
        $result = $this->traitOrderingNested($input, $orderingKey);

        event(new Ordering($this->model_name, $result, $input, $orderingKey, $this->user));

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
            foreach ($subtree as $node)
            {
                if (!in_array($node->id, $tree_ids))
                {
                    $tree_ids[] = $node->id;
                }
            }
        }

        $input->forget('ids');
        $input->put('ids', $tree_ids);

        $result = $this->traitRemoveNested($input);

        event(new Remove($this->model_name, $result, $input, $this->user));

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


    public function tree($extension)
    {
        $tree = $this->findBy('extension', '=', $extension)->toTree();

        $this->status =  Str::upper(Str::snake($this->type . 'GetTreeSuccess'));
        $this->response = $tree;

        return $tree;
    }


    public function treeList($extension)
    {
        $tree = $this->repo->treeList($extension, $this->access_ids)->toFlatTree();

        $tree = $tree->map(function ($item, $key) {
            return $item->only(['id', 'tree_list_title']);
        });

        $this->status =  Str::upper(Str::snake($this->type . 'GetTreeListSuccess'));
        $this->response = $tree;

        return $tree;
    }
}
