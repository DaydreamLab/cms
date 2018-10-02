<?php

namespace DaydreamLab\Cms\Repositories\Item;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use DaydreamLab\Cms\Models\Item\Item;
use Illuminate\Support\Collection;

class ItemRepository extends BaseRepository
{
    public function __construct(Item $model)
    {
        parent::__construct($model);
    }


    public function featured(Collection $input)
    {
        foreach ($input->ids as $id)
        {
            $item = $this->find($id);
            if ($item)
            {
                $item->featured = 1;
                $featured = $this->findFeatured();
                if ($featured->count())
                {
                    $item->featured_ordering = $featured->first()->featured_ordering +1;
                }
                else
                {
                    $item->featured_ordering = 1;
                }

                if (!$item->save())
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        return true;
    }


    public function findFeatured()
    {
        $featured = $this->model->where('featured_ordering', '>', 0)
            ->orderBy('featured_ordering', 'desc');
        return $featured->get();
    }
}