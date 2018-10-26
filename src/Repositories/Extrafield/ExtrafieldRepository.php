<?php

namespace DaydreamLab\Cms\Repositories\Extrafield;

use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use Illuminate\Support\Collection;

class ExtrafieldRepository extends BaseRepository
{
    public function __construct(Extrafield $model)
    {
        parent::__construct($model);
    }

    public function add(Collection $input)
    {
        if (InputHelper::null($input, 'ordering'))
        {
            $last = $this->model->where('group_id', $input->group_id)
                ->orderBy('ordering', 'desc')
                ->get()
                ->first();
            if ($last)
            {
                $input->forget('ordering');
                $input->put('ordering', $last->ordering + 1);
            }
            else
            {
                $input->forget('ordering');
                $input->put('ordering', 1);
            }
        }

        return $this->create($input->toArray());
    }
}