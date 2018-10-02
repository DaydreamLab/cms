<?php

namespace DaydreamLab\Cms\Services\Tag;

use DaydreamLab\Cms\Repositories\Tag\TagRepository;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;

class TagService extends BaseService
{
    use NestedServiceTrait;

    protected $type = 'Tag';

    public function __construct(TagRepository $repo)
    {
        parent::__construct($repo);
    }


    public function remove(Collection $input)
    {
        return $this->removeNested($input);
    }


    public function store(Collection $input)
    {
        return $this->storeNested($input);
    }

}
