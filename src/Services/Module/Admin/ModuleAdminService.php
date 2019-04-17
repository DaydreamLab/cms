<?php

namespace DaydreamLab\Cms\Services\Module\Admin;

use DaydreamLab\Cms\Repositories\Module\Admin\ModuleAdminRepository;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ModuleAdminService extends ModuleService
{
    protected $type = 'ModuleAdmin';

    protected $search_keys = ['title', 'description'];

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

}
