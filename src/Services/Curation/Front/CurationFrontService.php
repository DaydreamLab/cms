<?php

namespace DaydreamLab\Cms\Services\Curation\Front;

use DaydreamLab\Cms\Repositories\Curation\Front\CurationFrontRepository;
use DaydreamLab\Cms\Services\Curation\CurationService;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;

class CurationFrontService extends CurationService
{
    public function __construct(CurationFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getIndex()
    {
        $index = $this->search(collect([
            'isIndex' => 1,
            'state' => 1,
            'limit' => 1,
        ]))->first();

        if (!$index) {
            throw new NotFoundException('ItemNotExist');
        }

        $this->status = 'GetItemSuccess';
        $this->response = $index;

        return $this->response;
    }
}
