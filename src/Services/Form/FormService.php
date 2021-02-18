<?php

namespace DaydreamLab\Cms\Services\Form;

use DaydreamLab\Cms\Repositories\Form\FormRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class FormService extends CmsService
{
    protected $modelName = 'Form';

    protected $modelType = 'Base';

    public function __construct(FormRepository $repo)
    {
        parent::__construct($repo);
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->getServiceName(), $input, $this->user));

        return $item;
    }


    public function modify(Collection $input)
    {
        $result =  parent::modify($input);

        event(new Modify($this->find($input->get('id')), $this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input)
    {
        $result =  parent::remove($input);

        event(new Remove($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }
}
