<?php

namespace DaydreamLab\Cms\Services\Language\Admin;

use DaydreamLab\Cms\Repositories\Language\Admin\LanguageAdminRepository;
use DaydreamLab\Cms\Services\Language\LanguageService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class LanguageAdminService extends LanguageService
{
    protected $type = 'LanguageAdmin';

    protected $search_keys = ['title', 'description'];

    public function __construct(LanguageAdminRepository $repo)
    {
        parent::__construct($repo);
    }
}
