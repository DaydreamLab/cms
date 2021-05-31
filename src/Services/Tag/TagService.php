<?php

namespace DaydreamLab\Cms\Services\Tag;

use Carbon\Carbon;
use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\Cms\Repositories\Tag\TagRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Ordering;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\JJAJ\Exceptions\ForbiddenException;
use Illuminate\Support\Collection;

class TagService extends CmsService
{
    protected $modelName = 'Tag';

    protected $modelType = 'Base';

    protected $type = 'Tag';


    public function __construct(TagRepository $repo)
    {
        parent::__construct($repo);
    }


    public function add(Collection $input)
    {
        $item = $this->addNested($input);

        event(new Add($item, $this->getServiceName(), $input, $this->user));

        return $item;
    }


    public function restore(Collection $input)
    {
        return parent::restore($input);
    }


    public function modify(Collection $input)
    {
        $item = $this->checkItem($input);

        $result = $this->modifyNested($input, $item->parent, $item);

        event(new Modify($this->find($input->get('id')), $this->getServiceName(), $result, $input,$this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result = $this->removeNested($input);

        event(new Remove($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input)
    {
        $result = parent::state($input);

        event(new State($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function ordering(Collection $input)
    {
        $result =  parent::orderingNested($input);

        event(new Ordering($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function store(Collection $input)
    {
        $result = $this->storeNested($input);

        return $result;
    }
}
