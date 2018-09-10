<?php

namespace DaydreamLab\Cms\Repositories\Language\Front;

use DaydreamLab\Cms\Repositories\Language\LanguageRepository;
use DaydreamLab\Cms\Models\Language\Front\LanguageFront;

class LanguageFrontRepository extends LanguageRepository
{
    public function __construct(LanguageFront $model)
    {
        parent::__construct($model);
    }
}