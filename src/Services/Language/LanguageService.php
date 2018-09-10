<?php

namespace DaydreamLab\Cms\Services\Language;

use DaydreamLab\Cms\Repositories\Language\LanguageRepository;
use DaydreamLab\JJAJ\Services\BaseService;

class LanguageService extends BaseService
{
    protected $type = 'Language';

    public function __construct(LanguageRepository $repo)
    {
        parent::__construct($repo);
    }
}
