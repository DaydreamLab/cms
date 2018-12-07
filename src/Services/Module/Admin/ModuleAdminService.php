<?php

namespace DaydreamLab\Cms\Services\Module\Admin;

use DaydreamLab\Cms\Repositories\Module\Admin\ModuleAdminRepository;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ModuleAdminService extends ModuleService
{
    protected $type = 'ModuleAdmin';

    public function __construct(ModuleAdminRepository $repo)
    {
        parent::__construct($repo);
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

        if (!Helper::hasPermission($item->viewlevels, $this->viewlevels))
        {
            $this->status   = Str::upper(Str::snake($this->type.'InsufficientPermission'));
            $this->response = null;
            return false;
        }

        if ($item->locked_by && $item->locked_by != $this->user->id)
        {
            $this->status   = Str::upper(Str::snake($this->type.'IsLocked'));
            $this->response = (object) $this->user->only('email', 'full_name', 'nickname');
            return false;
        }

        $item->locked_by = $this->user->id;
        $item->locked_at = now();

        return $item->save();
    }


    public function store(Collection $input)
    {
        if (InputHelper::null($input, 'alias')){
            $input->forget('alias');
            $input->put('alias', Str::lower(now()->format('Y-m-d-H-i-s')));
        }


        if (InputHelper::null($input, 'language')){
            $input->forget('language');
            $input->put('language', '*');
        }


        if (InputHelper::null($input, 'access')){
            $input->forget('access');
            $input->put('access', 1);
        }


        return parent::store($input);
    }


}
