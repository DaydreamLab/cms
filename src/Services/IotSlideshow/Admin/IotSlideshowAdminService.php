<?php

namespace DaydreamLab\Cms\Services\IotSlideshow\Admin;

use DaydreamLab\Cms\Repositories\IotSlideshow\Admin\IotSlideshowAdminRepository;
use DaydreamLab\Cms\Services\IotSlideshow\IotSlideshowService;
use Illuminate\Support\Collection;

class IotSlideshowAdminService extends IotSlideshowService
{
    public function __construct(IotSlideshowAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function search(Collection $input)
    {
        if ($input->get('state') == null) {
            $q = $input->get('q');
            $q = $q->whereIn('state', [0, 1]);
            $input->put('q', $q);
        }

        return parent::search($input);
    }


    public function store(Collection $input)
    {
        if ( $input->get('state') == 1 && $input->get('publish_up') == null ) {
            $input->put('publish_up', now());
        }

        $result = parent::store($input);
        if ( $id = $input->get('id') ) {
            $result = $this->find($id);
        }
        $this->response = $result;
        return $result;
    }
}
