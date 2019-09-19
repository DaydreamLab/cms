<?php

namespace DaydreamLab\Cms\Traits\Repository;

use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;

trait WithFeatured
{
    public function featured($item, $featured)
    {
        if ($featured)
        {
            if (!$item->featured) {
                $newest = $this->findNewestFeatured();
                $item->featured_ordering = ($newest) ? $newest->featured_ordering + 1 : 1;
            }
        }
        else
        {
            if ($item->featured) {
                $other_items = $this->findNewerFeatured($item);
                $item->featured_ordering = 0;
                foreach ($other_items as $other_item)
                {
                    --$other_item->featured_ordering;
                    if (!$this->update($other_item, $other_item))
                    {
                        return false;
                    }
                }
            }
        }

        $item->featured = $featured;

        if (!$this->update($item, $item))
        {
            return false;
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