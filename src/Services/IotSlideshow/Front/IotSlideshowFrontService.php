<?php

namespace DaydreamLab\Cms\Services\IotSlideshow\Front;

use DaydreamLab\Cms\Repositories\IotSlideshow\Front\IotSlideshowFrontRepository;
use DaydreamLab\Cms\Services\IotSlideshow\IotSlideshowService;

class IotSlideshowFrontService extends IotSlideshowService
{
    public function __construct(IotSlideshowFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }
}
