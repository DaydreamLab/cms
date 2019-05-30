<?php

namespace DaydreamLab\Cms\Services\Tag\Admin;

use Carbon\Carbon;
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


    public function checkout(Collection $input, $diff = false)
    {
        return parent::checkout($input, true);
    }


    public function getItem($id, $diff = false)
    {
        $item =  parent::getItem($id, true);

        return $item;
    }


    public function ordering(Collection $input, $diff = false)
    {
        return parent::ordering($input, $diff);
    }


    public function state(Collection $input, $diff = false)
    {
        return parent::state($input, $diff);
    }


    public function store(Collection $input, $diff = false)
    {
        $result = parent::store($input, $diff);

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
            $item = $this->find($result->id);
        }

        $this->setCronJob($input, $item);

        return $result;
    }


    public function remove(Collection $input, $diff = false)
    {
        return parent::remove($input, $diff);
    }
}
