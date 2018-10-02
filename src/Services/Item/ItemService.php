<?php

namespace DaydreamLab\Cms\Services\Item;

use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemService extends BaseService
{
    protected $type = 'Item';

    protected $itemTagMapService;


    public function featured(Collection $input)
    {
        $feature = $this->repo->featured($input);
        if ($feature)
        {
            $this->status   = Str::upper(Str::snake($this->type.'FeaturedSuccess'));
            $this->response = null;
        }
        else
        {
            $this->status   = Str::upper(Str::snake($this->type.'FeaturedSuccess'));
            $this->response = null;
        }
    }

}
