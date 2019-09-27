<?php

namespace DaydreamLab\Cms\Services\Form;

use DaydreamLab\Cms\Repositories\Form\FormRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class FormService extends BaseService
{
    protected $type = 'Form';


    public function __construct(FormRepository $repo)
    {
        parent::__construct($repo);
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->getModelName(), $input, $this->user));

        return $item;
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->id), $this->getModelName(), $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

        event(new Remove($this->getModelName(), $result, $input, $this->user));

        return $result;
    }
}
