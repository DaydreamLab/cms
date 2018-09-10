<?php

namespace DaydreamLab\Cms\Repositories\Language\Admin;

use DaydreamLab\Cms\Repositories\Language\LanguageRepository;
use DaydreamLab\Cms\Models\Language\Admin\LanguageAdmin;

class LanguageAdminRepository extends LanguageRepository
{
    public function __construct(LanguageAdmin $model)
    {
        parent::__construct($model);
    }
}