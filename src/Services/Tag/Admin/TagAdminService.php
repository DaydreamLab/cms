<?php

namespace DaydreamLab\Cms\Services\Tag\Admin;

use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Services\Tag\TagService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class TagAdminService extends TagService
{
    use CmsCronJob;

    protected $type = 'TagAdmin';

    protected $search_keys = ['title', 'description'];

    protected $cmsCronJobService;

    public function __construct(TagAdminRepository  $repo,
                                CmsCronJobService   $cmsCronJobService)
    {
        parent::__construct($repo);
        $this->repo                 = $repo;
        $this->cmsCronJobService    = $cmsCronJobService;
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
        $this->update($item, $item);
        $this->response = $item;

        return $item;
    }


    public function store(Collection $input)
    {
        $result = parent::storeNested($input);

        if (gettype($result) == 'boolean')
        {
            if ($result === true)
            {
                $item  = $this->find($input->id);
            }
            else
            {
                // Something error 有可能是路徑已經存在
                return $this->response;
            }
        }
        else
        {
            $item      = $this->find($result->id);
        }

        $this->setCronJob($input, $item);

        return $result;
    }
}
