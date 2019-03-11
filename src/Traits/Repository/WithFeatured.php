<?php

namespace DaydreamLab\Cms\Traits\Repository;

use Illuminate\Support\Collection;

trait WithFeatured
{
    public function featured(Collection $input)
    {
        foreach ($input->ids as $id)
        {
            $item = $this->find($id);
            if ($item)
            {
                if (!$item->featured)
                {
                    $item->featured = $input->featured;

                    if ($input->featured)
                    {
                        $newest = $this->findNewestFeatured();
                        $item->featured_ordering = $newest->featured_ordering + 1;
                    }
                    else
                    {
                        $item->featured_ordering = 0;
                        $other_items = $this->findNewerFeatured($item);
                        foreach ($other_items as $other_item)
                        {
                            --$other_item->featured_ordering;
                            if (!$this->update($other_item, $other_item))
                            {
                                return false;
                            }
                        }
                    }

                    if (!$this->update($item, $item))
                    {
                        return false;
                    }
                }
            }
            else
            {
                return false;
            }
        }
        return true;
    }


    public function findNewestFeatured()
    {
        return $this->model->where('featured',1)
                            ->orderBy('featured_ordering', 'desc')
                            ->limit(1)
                            ->first();
    }


    public function findNewerFeatured($item)
    {
        return $this->model->where('featured', 1)
                        ->where('featured_ordering', '>', $item->featured_ordering)
                        ->get();
    }


    public function updateOrdering($other, $action = '++')
    {
        foreach ($other as $item)
        {
            $item->featured_ordering = $action == '++' ? ++$item->featured_ordering : --$item->featured_ordering;
            if (!$this->update($item, $item))
            {
                return false;
            }
        }

        return true;
    }
}