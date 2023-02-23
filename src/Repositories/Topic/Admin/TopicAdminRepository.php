<?php

namespace DaydreamLab\Cms\Repositories\Topic\Admin;

use DaydreamLab\Cms\Models\Topic\Admin\TopicAdmin;
use DaydreamLab\Cms\Repositories\Topic\TopicRepository;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use Illuminate\Support\Collection;

class TopicAdminRepository extends TopicRepository
{
    public function __construct(TopicAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }


    public function handleAddOrdering(Collection &$input, $key)
    {
        $maxOrdering = (new QueryCapsule())
            ->where('curationId', $input->get('curationId'))
            ->max($key)
            ->exec($this->model);

        $q = new QueryCapsule();
        $inputOrdering = $input->get($key) > $maxOrdering ? $maxOrdering + 1 : $input->get($key);
        if ($inputOrdering !== null) {
            $q->where($key, '>=', $inputOrdering)
                ->timestamps(false)
                ->where('curationId', $input->get('curationId'))
                ->orderBy($key, 'asc')
                ->increment($key, 1)
                ->exec($this->model);
        }

        $input->put($key, $maxOrdering + 1);
    }


    public function handleModifyOrdering(Collection &$input, $node, $key)
    {
        $maxOrdering = (new QueryCapsule())
            ->where('curationId', $input->get('curationId'))
            ->max($key)
            ->exec($this->model);

        $inputOrdering = $input->get($key) === null
            ? $maxOrdering + 1
            : ($input->get($key) <= 1
                ? 1
                : ($input->get($key) > $maxOrdering ? $maxOrdering + 1 : $input->get($key))
            );
        $nodeOrdering = $node->{$key};

        $q = new QueryCapsule();
        if ($nodeOrdering > $inputOrdering) {
            $q->where($key, '>=', $inputOrdering)
                ->where('curationId', $input->get('curationId'))
                ->where($key, '<', $nodeOrdering)
                ->orderBy($key, 'asc')
                ->timestamps(false)
                ->increment($key, 1)
                ->exec($this->model);
        } elseif ($nodeOrdering < $inputOrdering) {
            $q->where($key, '>', $nodeOrdering)
                ->where('curationId', $input->get('curationId'))
                ->where($key, '<=', $inputOrdering)
                ->orderBy($key, 'asc')
                ->timestamps(false)
                ->decrement($key, 1)
                ->exec($this->model);
        } else {
            return ;
        }

        $input->put($key, $inputOrdering);
    }


    public function handleDeleteOrdering(Collection &$input, $item, $key)
    {
        $q = new QueryCapsule();
        $q->where($key, '>', $item->{$key})
            ->where('curationId', $item->curationId)
            ->timestamps(false)
            ->orderBy($key, 'asc')
            ->decrement($key, 1)
            ->exec($this->model);
    }
}
