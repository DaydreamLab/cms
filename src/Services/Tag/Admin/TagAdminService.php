<?php

namespace DaydreamLab\Cms\Services\Tag\Admin;

use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Services\Tag\TagService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use Illuminate\Support\Collection;


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


    public function checkout(Collection $input)
    {
        return parent::checkout($input, true);
    }


    public function getItem($id)
    {
        $item =  parent::getItem($id);

        return $item;
    }


    public function ordering(Collection $input)
    {
        return parent::ordering($input);
    }


    public function state(Collection $input)
    {
        return parent::state($input);
    }


    public function store(Collection $input)
    {
        $result = parent::store($input);

        if (gettype($result) == 'boolean')
        {
            if ($result === true)
            {
                $item  = $this->find($input->get('id'));
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


    public function remove(Collection $input)
    {
        return parent::remove($input);
    }
}
