<?php

namespace DaydreamLab\Cms\Repositories\Item;

use DaydreamLab\JJAJ\Helpers\Helper;
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
                $other_items = $this->findOtherFeatured($id);
                if ($other_items->count())
                {
                    $counter = 1;
                    foreach ($other_items as $other_item)
                    {
                        $other_item->featured_ordering = ++$counter;
                        if (!$other_item->save())
                        {
                            return false;
                        }
                    }
                }

                $item->featured_ordering = 1;
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


    public function findOtherFeatured($id = null)
    {
        $query = $this->model;
        if ($id)
        {
            $query = $query->where('id', '!=', $id);
        }

        $query = $query->where('featured', 1)->orderBy('featured_ordering', 'asc');


        return $query->get();
    }

    public function featuredOrdering($other)
    {
        foreach ($other as $item)
        {
            $item->featured_ordering++;
            if (!$item->save())
            {
                return false;
            }
        }

        return true;
    }

    public function unfeatured(Collection $input)
    {
        foreach ($input->ids as $id)
        {
            $item = $this->find($id);
            if ($item)
            {
                $item->featured          = 0;
                $item->featured_ordering = null;

                $other_items = $this->findOtherFeatured($id);
                $counter = 0;
                foreach ($other_items as $other_item)
                {
                    $other_item->featured_ordering = ++$counter;
                    if (!$other_item->save())
                    {
                        return false;
                    }
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
}