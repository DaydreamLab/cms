<?php

namespace DaydreamLab\Cms\Services\Language\Admin;

use DaydreamLab\Cms\Repositories\Language\Admin\LanguageAdminRepository;
use DaydreamLab\Cms\Services\Language\LanguageService;

class LanguageAdminService extends LanguageService
{
    protected $type = 'LanguageAdmin';

    public function __construct(LanguageAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
