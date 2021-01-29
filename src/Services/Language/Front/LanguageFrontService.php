<?php

namespace DaydreamLab\Cms\Services\Language\Front;

use DaydreamLab\Cms\Repositories\Language\Front\LanguageFrontRepository;
use DaydreamLab\Cms\Services\Language\LanguageService;

class LanguageFrontService extends LanguageService
{
    protected $type = 'Front';

    public function __construct(LanguageFrontRepository $repo)
    {
        parent::__construct($repo);
    }
}
