<?php

namespace DaydreamLab\Cms\Services\Extrafield;

use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldGroupRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class ExtrafieldGroupService extends CmsService
{
    protected $modelName = 'ExtrafieldGroup';

    protected $modelType = 'Base';

    public function __construct(ExtrafieldGroupRepository $repo)
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


    public function state(Collection $input)
    {
        $result = parent::state($input);

        event(new State($this->getServiceName(), $result, $input, $this->user));

        return $result;
    }


    public function store(Collection $input)
    {
        $input = $this->setStoreDefaultInput($input);

        if ($input->has('extrafields')) {
            $extrafields = $input->get('extrafields');
            $extrafields_data = [];
            foreach ($extrafields as $extrafield) {
                $temp = [];
                $temp['id'] = $extrafield['id'];
                $temp['value'] = $extrafield['value'];
                if (isset($extrafield['params'])) {
                    $temp['params'] = $extrafield['params'];
                } else {
                    $temp['params'] = [];
                }
                $extrafields_data[] = $temp;
            }
            $input->put('extrafields', $extrafields_data);
        }

        if (InputHelper::null($input, 'id')) {
            return $this->add($input);
        } else {
            return $this->modify($input);
        }
    }
}
