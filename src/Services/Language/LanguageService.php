<?php

namespace DaydreamLab\Cms\Services\Language;

use DaydreamLab\Cms\Repositories\Language\LanguageRepository;
use DaydreamLab\Cms\Events\Add;
use DaydreamLab\Cms\Events\Modify;
use DaydreamLab\Cms\Events\Remove;
use DaydreamLab\Cms\Events\State;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Collection;

class LanguageService extends BaseService
{
    protected $type = 'Language';

    protected $model_name = 'Language';

    public function __construct(LanguageRepository $repo)
    {
        parent::__construct($repo);
    }


    public function add(Collection $input)
    {
        $item = parent::add($input);

        event(new Add($item, $this->model_name, $input, $this->user));

        return $item;
    }


    public function modify(Collection $input, $diff = false)
    {
        $result =  parent::modify($input, $diff);

        event(new Modify($this->find($input->id), $this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function state(Collection $input, $diff = false)
    {
        $result = parent::state($input, $diff);

        event(new State($this->model_name, $result, $input, $this->user));

        return $result;
    }


    public function remove(Collection $input, $diff = false)
    {
        $result =  parent::remove($input, $diff);

        event(new Remove($this->model_name, $result, $input, $this->user));

        return $result;
    }
}
