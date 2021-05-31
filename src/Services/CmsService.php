<?php

namespace DaydreamLab\Cms\Services;

use DaydreamLab\JJAJ\Exceptions\InternalServerErrorException;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\ApiJsonResponse;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class CmsService extends BaseService
{
    use LoggedIn, ApiJsonResponse;

    protected $package = 'Cms';


}
